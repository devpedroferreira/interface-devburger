// Date: 2021-17-01
//import express
// na integracao front-com-back instalar o CORS para resolver erro do navegador
// npm install cors
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());// para express funcionar .json dentro da rota post
app.use(cors()) // active CORS funcionar CORS

// para funcionar o message .json dentro da rota post
import pkg from 'statuses';
const { message } = pkg;

// import prisma client
import { PrismaClient } from '@prisma/client'
import send from 'send';
const prisma = new PrismaClient();

// porta do servidor
app.listen(3333, () => {
  console.log(' -> Server STARTED on port 3333 <-');
});

// rota get 
// route params roda no get  add / apos diretorio
// http://localhost:3333/users/31321s21
// o diretorio configura aqui no back-end
// app.get('/users/:id', (req, res) => {

app.get('/users', async (req, res) => { //route ativa /:acabate
      
  const allUsers = await prisma.user.findMany();
  res.status(200).json(allUsers);
}); 

// rota post
app.post('/users', async (req, res)  => {
    
      const userCreated =  await prisma.user.create({
              data: {
                  name: req.body.name,
                  age:  req.body.age,
                  email: req.body.email
                  
              }
        });

    res.status(201).json(userCreated);
});

// route update
app.put('/users/:id', async (req, res) => {
  
  const userUpdated = await prisma.user.update({
    where: { id: req.params.id },
    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email
      
    }
  });

  res.status(200).json(userUpdated);

});

//route delete  
app.delete('/users/:id', async (req, res) => {
  
  const userDeleted = await prisma.user.delete({
    where: { id: req.params.id }
  });

  res.status(200).json(userDeleted) // resposta para o front-end
  
});

