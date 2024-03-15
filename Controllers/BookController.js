import Book from "../Models/Book.js";
import BookService from "../Services/BookService.js"

class StudentController{
    async create (req,res){
        try{
            console.log(req.files)
            const book=await BookService.create(req.body,req.files.picture);
            return res.status(200).json(book);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
    async getAll (req,res){
        try{
            const books = await BookService.getAll(req.page,req.limit);
            return res.status(200).json(books);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
    async getOne (req,res){
        try{
            const book = await BookService.getOne(req.params.id)
            return res.status(200).json(book);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
    async update (req,res){
        try{
            const book = await BookService.update(req.body)
            return res.status(200).json(book);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
    async delete (req,res){
        try{
            const book = await BookService.delete(req.params.id);
            return res.status(200).json(book);
        }catch(error)
        {
            res.status(500).json(error)
        }
    }
}
export default new StudentController();