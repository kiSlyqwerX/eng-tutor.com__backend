import { Router } from "express";
import { ArticleController } from "../controllers/article.controller.js";
const articleRouter = Router()

// POST  на /article/generate
articleRouter.post("/generate", ArticleController.generate)

export {articleRouter}