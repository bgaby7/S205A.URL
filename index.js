const express = require('express');
const app = express();
const port = 5000; // Porta em que o servidor será executado
// Rota para exibir a página HTML
app.get('/medico', (req, res) => {
res.sendFile(__dirname + '/medico.html');
});
// Rota para exibir a página erro.html
app.get('/erro', (req, res) => {
res.sendFile(__dirname + '/erro.html');
});
// Rota para exibir a página HTML
app.get('/Login', (req, res) => {
res.sendFile(__dirname + '/Login.html');
});
// Rota para exibir a página HTML
app.get('/admin', (req, res) => {
res.sendFile(__dirname + '/admin.html');
});
// Rota para exibir a página paciente.html
app.get('/paciente', (req, res) => {
res.sendFile(__dirname + '/paciente.html');
});
// Rota para exibir a página HTML
app.get('/inicial', (req, res) => {
res.sendFile(__dirname + '/inicial.html');
});






// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});