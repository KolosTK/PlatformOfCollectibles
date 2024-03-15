import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const User = new mongoose.Schema({
    "username":{type:String,required:true},
    "password":{type:String,required:true},
    "email":{type:String, required:true, unique:true}
});
User.plugin(passportLocalMongoose);
export default mongoose.model('User', User);