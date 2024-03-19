import express from "express";
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from "express-fileupload";
import dotenv from 'dotenv';
dotenv.config();

let app = express();



app.use(express.json());
app.use(express.static('Static'));
app.use(fileUpload({}));
app.use('/api',router);

async function startApp(){
    try{
        await mongoose.connect(process.env.DB_URL);
        app.listen (process.env.PORT, ()=>console.log('My port is working ' + process.env.PORT));
    }
    catch(error)
    {
        console.log(error);
    }
}
startApp();