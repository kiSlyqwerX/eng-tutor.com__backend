import {Requests} from "../models/request.model.js"

const Requests = {
    async create(request) {
        try {
            const newRequest = await Requests.create(request)
            return newRequest
        } catch (error) {
            console.log(`[Requests.create]: ${error.message}`)
            return null
        }
    },
    async getAll() {
        try {
            const allRequests = await Requests.find()
            return allRequests
        } catch (error) {
            console.log(`[Requests.getAll]: ${error.message}`)
            return null
        }
    },
    async getById(requestId) {
        try {
            const request = await Requests.findById(requestId)
            return request
        } catch (error) {
            console.log(`[Requests.getById]: ${error.message}`)
            return null
        }
    },
    async deleteById(requestId) {
        try {
            const deletedRequest = await Requests.findByIdAndDelete(requestId)
            return deletedRequest
        } catch (error) {
            console.log(`[Requests.deleteById]: ${error.message}`)
            return null
        }
    },
    async changeStatusById(requestId, newStatus) {
        try {
            const updatedRequest = await Requests.findByIdAndUpdate(requestId,
                {status: newStatus},
                {new: true, runValidators: true}
            )
            return updatedRequest
        } catch (error) {
            console.log(`[Requests.changeStatusById]: ${error.message}`)
            return null
        }
    }
}