const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/index.html'))
})
app.get('/api/todos', (req , res) => {
    res.json([{id: 1, title: 'Learn backend', done: false}])
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})