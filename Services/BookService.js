import Book from '../Models/Book.js';
import fileService from '../FileService.js';

class BookService{
    async create (book,picture){
        const fileName = fileService.saveFile(picture);
            const createdStudent = await Book.create({...book,picture:fileName});
            return createdStudent;
    }
    async getAll (){
        const allBooks = await Book.find();
        return allBooks;
    }
    async getOne (id){
      if(!id){throw new Error ('ID don`t set')};
      const book = await Book.findById(id);
      return book;
    }

    async update (book){
        if(!student.id){throw new Error ('ID don`t set')};
        const updatedBook = await Book.findByIdAndUpdate(book.id, book,{new:true});
        return updatedBook;
    }
    async delete (id){
        if(!id){throw new Error ('ID don`t set')};
        const deletedBook = await Book.findByIdAndDelete(id);
        return deletedBook;
    }
}
export default new BookService();