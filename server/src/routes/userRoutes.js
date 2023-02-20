import express from 'express';
import { createUser } from '../controllers/userController.js';

const router = express();

router.post('/cadastrar', createUser);

export default router;