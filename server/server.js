import express from 'express';
import path from "path"
import cors from "cors";

const app = express();

// Configuração do CORS
app.use(cors());

// Configuração para permitir o uso de imagens
app.use(express.static(new URL('public', import.meta.url).pathname));

// Rotas
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
