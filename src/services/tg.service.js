import { tgConfig } from "../config/tg.config.js";

const TgService = {
    async sendMessage(message) {
        try {


             const req = await fetch(`https://api.telegram.org/bot${tgConfig.BOT_TOKEN}/sendMessage`, {
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: tgConfig.CHAT_ID,
                    text: message
                }),
                method: "POST"
             })

             if(!req.ok) return null
             const res = await req.json()

             return res.result
        } catch (error) {
            console.log(`[tgService.sendMessage]: ${error.message}`)
            return null
        }
    }
}

export {TgService}