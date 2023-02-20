import express from 'express';
const app = express();

import userRoutes from './routes/userRoutes.js';

app.use(express.json());
app.use(userRoutes)

app.get('/', async (req, res) => {
    res.send("Página")
});



const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} http://localhost:3333`)
})
