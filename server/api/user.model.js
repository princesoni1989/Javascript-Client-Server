import mongoose from 'mongoose'

const Schema = mongoose.Schema


const User = new Schema({
    name: String,
    email: String,
    address: {
        city: String,
        country: String
    }

})
const userModel = mongoose.model('users', User)
export default userModel

