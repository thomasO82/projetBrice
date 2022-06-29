import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import 'dotenv/config';
import cors from 'cors'

const db = process.env.BDD_URL;
const app = express();
const router = express.Router()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./assets')); 
app.use(router)
router.use(userRouter)

app.listen(process.env.PORT,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(`Connected at localhost`);
    }
})

mongoose.connect(db,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("vous etes connecter à mongoDB");
    }
})



export default router
