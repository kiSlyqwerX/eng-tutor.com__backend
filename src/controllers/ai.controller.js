import { aiService } from "../services/ai.service.js";

async function generateAnswer(req,res) {
    try {
        const message = req.body

        const result = await aiService.generateBlog(message)

        if(!result.success) return res.status(500).json({success: false, message: "[ai Controller]: Ai is not working"})

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({success: false, message: "[ai Controller]: Server error"})
    }
}

export {generateAnswer}