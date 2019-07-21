import {
    saveUser as saveUserService,
    getUser as getUserService
} from './user.service'

export async function saveUser(req, res) {
    const response = await saveUserService(req.body)
    res.json(response)
}

export async function getUser(req, res) {
    const response= await getUserService()
    res.json(response)
}