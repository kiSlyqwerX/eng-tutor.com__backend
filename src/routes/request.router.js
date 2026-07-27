import { Router } from "express";
import { checkRequest } from "../validators/request.validator.js";
import { RequestsController } from "../controllers/request.controller.js";

const requestRouter = Router()

// POST  на /request/new
requestRouter.post("/new", checkRequest, RequestsController.create)

export {requestRouter}