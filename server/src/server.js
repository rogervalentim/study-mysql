import express from 'express';
const app = express();

import cors from 'cors';

// Routes
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';


app.use(cors);
app.use(express.json());

app.use(userRoutes);
app.use(bookRoutes);

app.get('/', async (req, res) => {
    res.send("Página")
});


const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} http://localhost:${PORT}`)
})
