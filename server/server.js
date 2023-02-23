import express from 'express';
const app = express();


// Routes
import userRoutes from './src/routes/userRoutes.js';
import bookRoutes from './src/routes/bookRoutes.js';


app.use(express.json());

app.use(userRoutes);
app.use(bookRoutes);

app.get('/', async (req, res) => {
    res.send("Página")
});


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} http://localhost:${PORT}`)
})
