import { Router } from "express";
import { checkRequest } from "../validators/orders.validator.js";
import { handleNewRequest } from "../services/request.service.js";

const requestRouter = Router()

requestRouter.post("/request", checkRequest, handleNewRequest)

export {requestRouter}