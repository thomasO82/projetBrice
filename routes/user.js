import { Router } from 'express' //importe uniquement la methode Router() d'express
import UserModel from '../models/user.js'
import escapeHtml from 'escape-html'

const userRouter = Router()

userRouter.post('/user', async (req, res) => {
    try {
        for(let i in req.body){
            req.body[i] = escapeHtml(req.body[i])
         }
         console.log(req.body);
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
        for(let i in req.body){
            req.body[i] = escapeHtml(req.body[i])
         }
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
	res.json("remove")
    } catch (error) {
        res.send(error)
    }
})

userRouter.delete('/users', async (req, res)=> {
try{
  await UserModel.deleteMany({})
res.json('on est bon')
}catch (err){
res.send(err)
}
})
export default userRouter
