import express from 'express';//ESModules
//const express = require('express') -> commonJS

import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json());

const PORT =  3000;

app.get("/ping", (_req, res) => { //para typescript el _req es una variable que no se usa, pero se usa para que no de error
  console.log("someone pinged me" + new Date().toLocaleDateString());
  res.send("pong");
})

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})