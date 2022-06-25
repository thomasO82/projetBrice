import { Router } from 'express' //importe uniquement la methode Router() d'express
import UserModel from '../models/User.js'

const userRouter = Router()

userRouter.post('/user', async (req, res) => {
    const newUser = new UserModel(req.body)
    await newUser.save()
    res.send(newUser)
})

userRouter.get('/users', async (req, res) => {
    let users = await UserModel.find()
    console.log(users);
    res.json(users)
})

userRouter.put('/user/:id', async (req, res) => {
    console.log(req);
    let updatedUser = req.body
    let user = await UserModel.updateOne({ _id: req.params.id }, updatedUser)
    res.send(user)
})

userRouter.delete('/user/:id', async (req, res) => {
    let pkm = await UserModel.deleteOne({ _id: req.params.id })
})


export default userRouter