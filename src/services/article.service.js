import { Articles } from "../repositories/article.repository.js"
import { ThemesService } from "./theme.service.js"
import { AiService } from "./ai.service.js"

const ArticlesService = {
    async generate() {
        try {
            const theme = await ThemesService.getThemeForArticle()
            if(!theme) return null

            const article = await AiService.generateArticle(theme)
            if(!article) return null

            console.log(article)
            const savedArticle = await Articles.create(article)

            if(!savedArticle) return null

            return savedArticle
        } catch (error) {
            console.log(`[ArticlesService.create] - ${error.message}`)
            return null
        }
    }
}

export {ArticlesService}