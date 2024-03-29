import User from "../Models/User.js";
import UserService from "../Services/UserService.js";

const users =[];

class UserController{
    async getAll (req,res){
        try{
            const users = await UserService.getAll();
            return res.status(200).json(users);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
    async register (req,res){
        try{
            const user = await UserService.register(req.body);
            return res.status(200).json(user);
        }catch(error)
        {
            res.redirect('/register')
        }
    }
    async login (req,res){
        try{
            const user = await BookService.login(req.email,req.username);
            return res.status(200).json(user);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
}
export default new UserController();