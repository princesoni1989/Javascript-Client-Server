import models from '../../connections/mysql'
import jwt from 'jsonwebtoken'

const UserModel = models.user

export function saveUser(user, cb) {
    return UserModel.saveUserToDb(user)
}


export function getUser(cb) {
    return UserModel.findAllUsers()
}

export async function login(email) {
    const user = await UserModel.findUserByEmail(email)
    const token = jwt.sign({email: user.email, name: user.name, id: user.id}, 'RESTFULAPIs')
    return token;
}