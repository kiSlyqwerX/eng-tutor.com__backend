import { RequestsService } from "../services/request.service.js";
import { TgService } from "../services/tg.service.js";

const RequestsController = {
    async create(req, res) {
        try {
            const savedRequest = await RequestsService.create(req.newRequest)

            if (!savedRequest) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            try {
                const {name, contact, comment, test} = savedRequest
                const message = `Нова заявка з сайту:\n\nІмя: ${name}\nКонтакт: ${contact}\nКоментар: ${comment || "Коментар відсутній"}\nТест:${test || "Тест відсутній"}`
                await TgService.sendMessage(message)
            } catch (error) {
                console.log(`[RequestsController.create] - ${error.message}`)
            }

            return res.status(200).json({ success: true, message: "Заявку успішно надіслано" })
        } catch (error) {
            console.log(`[RequestsController.create] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    }
}

export { RequestsController }