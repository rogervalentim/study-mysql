import express from 'express';
import { listUser, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express();

router.get('/usuarios', listUser);
router.post('/cadastrar-usuario', createUser);
router.put('/atualizar-usuario/:id', updateUser);
router.delete('/deletar-usuario/:id', deleteUser);

export default router;