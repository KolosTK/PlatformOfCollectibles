import Router from 'express';
import BookController from './Controllers/BookController.js';

const router = new Router();
router.post('/books',BookController.create);
router.get('/books',BookController.getAll);
router.get('/books/:id',BookController.getOne);
router.put('/books/:id',BookController.update);
router.delete('/books/:id',BookController.delete);

export default router;