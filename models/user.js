import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    firstname: {
        type: String,
    },
    mail: {
        type: String,
    },
    password: {
        type: String,
    },
   
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
