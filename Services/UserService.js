import User from "../Models/User.js";
import dotenv from 'dotenv';
import bcrypt from "bcrypt";
dotenv.config();

class UserService{
    async getAll (){
        const users = User.find();
        return users;
    }
    async login (username,email){
        User.findOne({ username: username, email:email }, (err, user) => {
            if (err) {
              console.log("Error");
            } else {
              var payload = {
                id: user.id,
                expire: Date.now() + 1000 * 60 * 60 * 24 * 7,
              };
        
              var token = jwt.encode(payload, process.env.JWT_SECRET);
        
              username.json({ token: token });
            }
          });
    };
    
    async register (user){
        User.register({
            email:user.email,
            username:user.username
        }),
        function(err){
            if(err){
                return err;
            }else{
                return "Successful";
            }
        }

    }
}
export default new UserService();