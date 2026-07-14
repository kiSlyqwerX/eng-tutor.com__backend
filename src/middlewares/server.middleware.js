import cors from "cors"
import { serverConfig } from "../config/server.config.js"


const checkCors = cors({
    origin: serverConfig.ORIGIN
})

export {checkCors}