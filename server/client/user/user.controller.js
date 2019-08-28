import {
    saveUser as saveUserService,
    getUser as getUserService,
    login as loginUserService
} from './user.service'

export async function saveUser(req, res) {
    try {
        const response = await saveUserService(req.body)
        res.json(response)
    } catch (e) {
        console.log(e)
    }
}

export async function getUser(req, res) {
    const response = await getUserService()
    res.json(response)
}

export async function login(req, res) {
    console.log(req)
    try {
        const response = await loginUserService(req.body.email)
        res.json({token: response})
    } catch (e) {
        res.json(e)
    }

}