import userModel from './user.model'
import jwt from 'jsonwebtoken'

export function saveUser(user, cb) {
    const userData = new userModel(user)
    return userData.save()
}


export function getUser(cb) {
    return userModel.find()
}

export async function login(email) {
    const user  = await userModel.findOne({ email})
    const token = jwt.sign({ email: user.email, name: user.name, _id: user._id}, 'RESTFULAPIs')
    return token;
}