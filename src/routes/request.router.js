import { Router } from "express";
import { checkRequest } from "../validators/orders.validator.js";
import { RequestsController } from "../controllers/request.controller.js";

const requestRouter = Router()

requestRouter.post("/request", checkRequest, RequestsController)

export {requestRouter}