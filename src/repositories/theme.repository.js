import { ThemeModel } from "../models/theme.model.js"

const Themes = {
    async create(theme) {
        try {
            const newTheme = await ThemeModel.create(theme)
            return newTheme
        } catch (error) {
            console.log(`[Themes.create]: ${error.message}`)
            return null
        }
    },
    async getToArticle() {
        try {
            const theme = await ThemeModel.findOne().sort({createdAt: 1})
            return theme
        } catch (error) {
            console.log(`[Themes.getToArticle]: ${error.message}`)
            return null
        }
    },
    async getAll() {
        try {
            const allThemes = await ThemeModel.find()
            return allThemes
        } catch (error) {
            console.log(`[Themes.getAll]: ${error.message}`)
            return null
        }
    },
    async deleteById(themeId) {
        try {
            const deletedTheme = await ThemeModel.findByIdAndDelete(themeId)
            return deletedTheme
        } catch (error) {
            console.log(`[Themes.deleteById]: ${error.message}`)
            return null
        }
    }
}

export {Themes}