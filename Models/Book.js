import mongoose from 'mongoose';

const Book = new mongoose.Schema({
    "title":{type:String,required:true},
    "description":{type:String, required:true},
    "author":{type:String,required:true},
    "yearOfCreation":{type:String,required:true},
    "genre":{type:String,required:true},
    "picture":{type:String}
});
export default mongoose.model('Book', Book);