import { tgConfig } from "../config/tg.config.js";

const tgService = {
    async sendToTelegram(formData) {
        try {
            const {name, contact, test, comment} = formData


             const message = `Нова заявка з сайту:\n\nІмя: ${name}\nКонтакт: ${contact}\nКоментар: ${comment || "Коментар відсутній"}\nТест:${test || "Тест відсутній"}`

             const result = fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: tgConfig.CHAT_ID,
                    text: message
                })
             })

             return "Дані відправлено!"
        } catch (error) {
            console.log(`[tgService.sendToTelegram]: ${error.message}`)
            return null
        }
    }
}