import express from 'express';
import path from "path"
import cors from "cors";
const app = express();


// Routes
import userRoutes from './src/routes/userRoutes.js';
import bookRoutes from './src/routes/bookRoutes.js';


app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(express.static(path.join("public")));
    app.use(cors());
    next();
});


app.use(userRoutes);
app.use(bookRoutes);

app.get('/', async (req, res) => {
    res.send("Página")
});


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} http://localhost:${PORT}`)
})
