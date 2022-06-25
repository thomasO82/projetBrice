import { Router } from 'express' //importe uniquement la methode Router() d'express
import UserModel from '../models/User.js'

const userRouter = Router()

userRouter.post('/user', async (req, res) => {
    try {
        const newUser = new UserModel(req.body)
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        console.log(error.errors);
        res.send(error.errors)
    }

})

userRouter.get('/users', async (req, res) => {
    try {
        let users = await UserModel.find()
        res.json(users)
    } catch (error) {
        res.send(error)
    }

})

userRouter.get('/user/:id', async (req, res) => {
    try {
        let users = await UserModel.findOne({ id: req.params.id })
        res.json(users)
    } catch (error) {
        res.send(error)
    }
})

userRouter.put('/user/:id', async (req, res) => {
    try {
        let updatedUser = req.body
        let user = await UserModel.updateOne({ _id: req.params.id }, updatedUser)
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})

userRouter.delete('/user/:id', async (req, res) => {
    try {
        let usr = await UserModel.deleteOne({ _id: req.params.id })
    } catch (error) {
        res.send(error)
    }
})


export default userRouter