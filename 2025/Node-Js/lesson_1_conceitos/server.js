// jeito antigo 
// no package.json adicionar "type": "commonjs", 
//const express = require('express');

// jeito novo
// no package.json adicionar "type": "module",
import express from 'express';
// start server
const app = express();
app.use(express.json()); // para o express entender json BODY
app.listen(3333, () => console.log('Server is running on port 3333!'));

// protocolo http
/*
    get: buscar informacao
    post: criar informacao
    put: editar varias informacao
    push: editar uma informacao
    delete: deletar informacao

*/

// http://localhost:3333/user - reposta quando chegar essa resiscao/site
// response to client: mensagem Hello World
// rota get no servidor responde o front-end cliente
app.get('/user', (request, response) => {
    response.send( "Hello World my friend!" );
}); // rota   

// rota POST
app.post('/user', (request, response) => {
    response.send('resp POST for thunder');
});


