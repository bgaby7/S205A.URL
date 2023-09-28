const express = require('express');
const app = express();
const port = 3000; // Porta em que o servidor será executado
// Rota para exibir a página erro.html
app.get('/', (req, res) => {
res.sendFile(__dirname + '/erro.html');
});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});


