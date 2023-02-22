import express from 'express';
import { listUser, createUser } from '../controllers/userController.js';

const router = express();

router.get('/usuarios', listUser);
router.post('/cadastrar', createUser);

export default router;