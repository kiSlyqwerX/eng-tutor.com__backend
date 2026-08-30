import { Router } from "express";
import { ThemeController } from "../controllers/theme.controller.js";
import { checkTheme } from "../validators/theme.validator.js";

const themeRouter = Router()

// POST  на /theme/new
themeRouter.post("/new", checkTheme, ThemeController.create)

export {themeRouter}