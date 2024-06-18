const express = require('express')

const mongoose = require('mongoose')
const DatabaseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  }
});
const DatabaseModel = mongoose.model('DatabaseModel', DatabaseSchema);

async function createDocument(description) {
  const document = new DatabaseModel({ description });


const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://hillarysilva:OMENnCsDg8ccADTT@cluster0.9yujet1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


const tarefas = [
    {id:1, descricao:'estudar'},
    {id:2, descricao:'arrumar quarto'},
    {id:1, descricao:'lavar roupas'},
]

function buscarPorId(id) {
  return tarefas.filter (tarefas => tarefas.id == id)
}

app.get('/tarefas', (req, res) => {
  res.send('Lista de tarefas')
})

app.get('/tarefas', (req, res) => {
    res.status(200).send(tarefas)
  })

  app.get('/tarefas', (req, res) => {
    res.json(buscarPorId(req.params.id))
  })

  app.post('/tarefas', (req, res) => {
    tarefas.push(req, body)
    res.status(201).send("Tarefa criada")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



module.exports = DatabaseModel;
module.exports = { createDocument };

