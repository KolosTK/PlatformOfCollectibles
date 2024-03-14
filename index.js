import express from "express";
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 6000;

let app = express();

app.use(express.json());
app.use('/api',router);

const DB_URL ="mongodb+srv://tanyakolosenko1705:irXfH6xT8DqszQSg@cluster0.nhqth5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function StartApp(){
    try{
        await mongoose.connect(DB_URL);
        app.listen (PORT, ()=>console.log('My port is working ' + PORT));
    }
    catch(error)
    {
        console.log(error);
    }
}
StartApp();