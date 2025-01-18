// Date: 2021-17-01
//import express
import express from 'express';
const app = express();
app.use(express.json());// para express funcionar .json dentro da rota post

// para funcionar o message .json dentro da rota post
import pkg from 'statuses';
const { message } = pkg;

// import prisma client
import { PrismaClient } from '@prisma/client'
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
                  email: req.body.email,
                  age:  req.body.age
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
      email: req.body.email,
      age: req.body.age
    }
  });

  res.status(200).json(userUpdated);

});

//route delete  
app.delete('/users/:id', async (req, res) => {
  
  const userDeleted = await prisma.user.delete({
    where: { id: req.params.id }
  });

  res.status(200).json(userDeleted);

});

