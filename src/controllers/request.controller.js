import { handleNewRequest } from "../services/request.service.js"

async function startRequestService(req,res) {
    try {
        const message = req.body

        const result = await aiService.generateBlog(message)

        if(!result.success) return res.status(500).json({success: false, message: "[request Controller]: Service is not working"})

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({success: false, message: "[request Controller]: Server error"})
    }
}

export {startRequestService}