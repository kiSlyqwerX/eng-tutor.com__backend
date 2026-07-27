import "dotenv/config"
import express from "express"
import { checkCors } from "./src/middlewares/server.middleware.js"
import { serverConfig } from "./src/config/server.config.js"
import { requestRouter } from "./src/routes/request.router.js"
import {connectDB} from "./src/config/db.config.js"

let server = null

const app = express()


app.use(express.json())
app.use(checkCors)
app.use("/request", requestRouter)

async function startServer() {
    try {
        console.log("Starting server...")

        console.log("Connect to MongoDB...")
        connectDB()

        server = app.listen(serverConfig.PORT, () => {
            console.log(`Server is running on port ${serverConfig.PORT}`)
        })
    } catch (error) {
        console.log(`[main file]: Failed to start services ${error.message}`)
        process.exit(1)
    }
}

startServer()