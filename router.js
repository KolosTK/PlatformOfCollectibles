import Router from 'express';
import BookController from './Controllers/BookController.js';
import UserController from './Controllers/UserController.js'

const router = new Router();
router.post('/books',BookController.create);
router.get('/books',BookController.getAll);
router.get('/books/:id',BookController.getOne);
router.put('/books/:id',BookController.update);
router.delete('/books/:id',BookController.delete);

router.post('/users/register',UserController.register);
router.get('/users',UserController.getAll);
router.post('/users/login',UserController.login);

export default router;