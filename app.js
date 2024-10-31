require('dotenv').config(); // Carregar variáveis de ambiente do .env
const express = require("express");
const cors = require("cors"); 
const connectDB = require('./config/database'); // Importar a função de conexão do banco de dados
const eventRoutes = require('./src/routes/eventRoutes'); // Importar as rotas dos eventos

const app = express();
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Permitir que a aplicação receba JSON

const port = process.env.PORT || 3000; // Usar a porta definida nas variáveis de ambiente ou 3000 como padrão

// Conectar ao banco de dados
connectDB(); // Função que se conecta ao MongoDB

// Usar rotas
app.use("/xote", eventRoutes); // Prefixo para as rotas de eventos

// Iniciar o servidor
app.listen(port, () => {
    console.log(`App running on port ${port}`); // Mensagem para indicar que o servidor está rodando
});