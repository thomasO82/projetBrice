import { Router } from 'express' //importe uniquement la methode Router() d'express
import UserModel from '../models/User.js'

const userRouter = Router()

userRouter.post('/user', async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const newUser = new UserModel(req.params)
    userSaved = await newUser.save()
    res.send(newUser)
})

userRouter.get('/users', async (req, res) => {
    let users = await UserModel.find()
    console.log(users);
    res.json(users)
})

userRouter.put('/user/:id', async (req, res) => {
    let updatedUser = req.body
    let pkm = await UserModel.updateOne({ _id: req.params.id }, updtatedPokemon)
})

userRouter.delete('/user/:id', async (req, res) => {
    let pkm = await UserModel.deleteOne({ _id: req.params.id })
})


export default userRouter