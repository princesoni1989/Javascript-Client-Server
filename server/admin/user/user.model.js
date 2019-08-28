import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';

const saltRounds = 10;

const Schema = mongoose.Schema


const User = new Schema({
    name: String,
    password: String,
    email: String,
    address: {
        city: String,
        country: String
    }

})

User.pre('save', async function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next()
})

User.methods.comparePassword = function(plaintext) {
    return bcrypt.compareSync(plaintext, this.password);
};
const userModel = mongoose.model('users', User)
export default userModel

