import express from 'express';
import cors from "cors";
const app = express();


// Routes
import userRoutes from './src/routes/userRoutes.js';
import bookRoutes from './src/routes/bookRoutes.js';


app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(bookRoutes);

app.get('/', async (req, res) => {
    res.send("Página")
});


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} http://localhost:${PORT}`)
})
