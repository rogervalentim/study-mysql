import express from 'express';
import { createBooks } from '../controllers/bookController.js';

const router = express();

router.post('/cadastrar-livro', createBooks);

export default router;