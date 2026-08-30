import { aiConfig } from "../config/ai.config.js";

const AiService = {

    async generateArticle(theme) {
        try {
            if (!aiConfig.DEEPSEEK_API_URL || !aiConfig.DEEPSEEK_API_KEY) {
                throw new Error("Deepseek key or url is not defined")
            }

            const requestBody = {
                model: aiConfig.models.easy,
                messages: [
                    {
                        role: "system",
                        content: aiConfig.prompts.systemPrompt
                    },
                    {
                        role: "user",
                        content: typeof theme === "object" ? JSON.stringify(theme) : theme
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000
            }

            const response = await fetch(aiConfig.DEEPSEEK_API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${aiConfig.DEEPSEEK_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(
                    data?.error.message || `[generateArticle]: ${response.status}`
                )
            }



            const finalResult = data?.choices?.[0]?.message?.content?.trim()

            if(!finalResult) return `[generateAricle]: DeepSeek returned nothing`

            console.log(`[generateArticle]: ${finalResult}`)
            return finalResult
        } catch (error) {
            console.log(`[generateArticle]: Failed to generate answer - ${error.message}`)
            return { success: false, message: error.message }
        }
    }

}

export { AiService }