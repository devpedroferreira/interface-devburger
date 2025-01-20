// jeito antigo 
// no package.json adicionar "type": "commonjs", 
//const express = require('express');

// jeito novo
// no package.json adicionar "type": "module",
import express from 'express';  

// import prisma
import { Prisma, PrismaClient } from '@prisma/client';
import { message } from 'statuses';
const prisma = new PrismaClient();

// mongodb+srv://pedroofan:<db_password>@users.6suw3.mongodb.net/?retryWrites=true&w=majority&appName=users
// user:pedroofan pass: 1JvVusFqL0QFfG8n // acess mongodb atlas

// start server
const app = express();
app.use(express.json()); // para o express entender json BODY

app.listen(3333);
//app.listen(3333, () => console.log('Server is running on port 3333!'));

/*
    // protocolo http
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

// Lista de usuarios
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany() // list all users
    res.status(200).json(users); // resposta para o front-end
}); 
  
// rota POST - add criar um novo usuario
app.post('/users', async (req, res) => {
       
        const user =  await prisma.user.create({
            data:{
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        })

    res.status(201).json(user); // resposta para o front-end   
});

// lesson 12 creat user simulator on variable
// install biblioteca prisma io

// rota PUT - edit - route params 
app.put('/users/:id', async (req, res) => {
    
    const user =  await prisma.user.update({
        where:{
            id: req.body.id
        },
        data:{
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    res.status(200).json(user); // resposta para o front-end   
});

// rota delete
app.delete('users/:id', async (req, res) => {

    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })

    res.status(200).json({message: user + ' : Usuário Deletado'}); // resposta para o front-end

});
