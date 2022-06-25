import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Pas de nom'],
    },
    firstname: {
        type: String,
        required: [true, 'Pas de prénom'],
    },
    mail: {
        type: String,
        required: [true, 'Pas de mail'],
    },
    password: {
        type: String,
        required: [true, 'Pas de mot de passe']
    },
   
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
