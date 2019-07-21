import userModel from './user.model'

export function saveUser(user, cb) {
    const userData = new userModel(user)
    return userData.save()
}


export function getUser(cb) {
    return userModel.find()
}