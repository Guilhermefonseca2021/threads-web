// config initial
const express = require('express');
const app = express();

// ler o JSON / middlewares(executar respostas) .use
const router = express.Router();
app.use(router);

// rota inicial
app.get('/', (request, response) => {

    // mostra requisiscao
    response.send({ message: 'Oi express'})
})



// entregar porta
app.listen(3333, () => console.log("server starting at 3333"))