// jeito antigo 
// no package.json adicionar "type": "commonjs", 
//const express = require('express');

// jeito novo
// no package.json adicionar "type": "module",
import express from 'express';  
// user:pedroofan pass: 1JvVusFqL0QFfG8n // acess mongodb atlas




// start server
const app = express();
app.use(express.json()); // para o express entender json BODY

// array simule database
const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.listen(3333);
//app.listen(3333, () => console.log('Server is running on port 3333!'));

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
// aqui no get apos o diretorio /users/: significa o diretorio que o front-end vai acessar
app.get('/users', (req, res) => {
    res.status(200).json(users); // resposta para o front-end
}); 


// rota   

// rota POST
app.post('/users', (req, res) => {
    users.push(req.body); // add nome no array
    //console.log(req.breste POST"); // para ver o body content
    res.status(201).json({message: "User created with success!"}); // resposta para o front-end   
});

// lesson 12 creat user simulator on variable
// install biblioteca prisma io




