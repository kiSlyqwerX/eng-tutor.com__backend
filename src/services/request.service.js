import Request from "../models/request.model.js";
import { tgConfig } from "../config/tg.config.js";

/**
 * Допоміжна функція для відправки повідомлення в Telegram
 */
async function sendTelegramNotification(formData) {
    const { name, contact, test, comment } = formData;
    
    const message = `Нова заявка з сайту:\n\nІм'я: ${name}\nКонтакт: ${contact}\nКоментар: ${comment || "Коментар відсутній"}\nТест: ${test}`;

    const response = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: tgConfig.CHAT_ID,
            text: message
        })
    });

    if (!response.ok) {
        throw new Error(`Telegram API повернув помилку: ${response.status}`);
    }
}

/**
 * Головний сервіс: зберігає в БД, а потім шле в Телеграм
 */
async function handleNewRequest(formData) {
    try {
        // Крок 1: Зберігаємо дані в MongoDB
        const savedRequest = await Request.create({
            name: formData.name,
            contact: formData.contact,
            test: formData.test,
            comment: formData.comment
        });

        // Крок 2: Відправляємо сповіщення в Telegram
        let tgNotificationSent = false;
        try {
            await sendTelegramNotification(formData);
            tgNotificationSent = true;
        } catch (tgError) {
            // Якщо Телеграм «ліг», ми логуємо помилку, але не перериваємо процес,
            // адже в базі даних заявка вже успішно збережена.
            console.error("Помилка відправки в Telegram:", tgError.message);
        }

        return {
            success: true,
            message: tgNotificationSent 
                ? "Заявку успішно збережено в БД та відправлено в Telegram" 
                : "Заявку збережено в БД, але виникла помилка при відправці в Telegram",
            data: savedRequest
        };

    } catch (error) {
        return {
            success: false,
            message: `Помилка обробки запиту: ${error.message}`
        };
    }
}

export { handleNewRequest };