import {ArticleModel} from "../models/article.model.js"

const Articles = {
    async create(article) {
        try {
            const newArticle = await ArticleModel.create(article)
            return newArticle
        } catch (error) {
            console.log(`[Articles.create]: ${error.message}`)
            return null
        }
    },
    async getAll() {
        try {
            const allArticles = await ArticleModel.find()
            return allArticles
        } catch (error) {
            console.log(`[Articles.getAll]: ${error.message}`)
            return null
        }
    },
    async getById(articleId) {
        try {
            const article = await ArticleModel.findById(articleId)
            return article
        } catch (error) {
            console.log(`[Articles.getById]: ${error.message}`)
            return null
        }
    },
    async getBySlug(articleSlug) {
        try {
            const article = await ArticleModel.findOne({slug: articleSlug})
            return article
        } catch (error) {
            console.log(`[Articles.getBySlug]: ${error.message}`)
            return null
        }
    },
    async deleteById(articleId) {
        try {
            const deletedArticle = await ArticleModel.findByIdAndDelete(articleId)
            return deletedArticle
        } catch (error) {
            console.log(`[Articles.deleteById]: ${error.message}`)
            return null
        }
    }
}

export {Articles}