import { Requests } from "../repositories/request.repository.js"

const RequestsService = {
    async create(request) {
        try {
            const savedRequest = await Requests.create(request)

            if(!savedRequest) return null

            return savedRequest
        } catch (error) {
            console.log(`[RequestsService.create] - ${error.message}`)
            return null
        }
    }
}

export {RequestsService}