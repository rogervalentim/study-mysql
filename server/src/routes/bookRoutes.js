import express from 'express';
import { createBooks, deleteBooks, updateBooks } from '../controllers/bookController.js';

const router = express();

router.post('/cadastrar-livro', createBooks);
router.put('/atualizar-livro/:id', updateBooks);
router.delete('/deletar-livro/:id', deleteBooks);

export default router;