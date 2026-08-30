import { ArticlesService } from "../services/article.service.js"


const ArticleController = {
    async generate(req, res) {
        try {
            const createdArticle = await ArticlesService.generate()

            if (!createdArticle) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            
            return res.status(200).json({ success: true, message: "Статтю успішно створено", data: {article: createdArticle} })
        } catch (error) {
            console.log(`[ArticleController.create] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    }
}

export { ArticleController }