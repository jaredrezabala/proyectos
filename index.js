const { configDotenv } = require('dotenv')
const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')
configDotenv()
const URL = process.env.URL
const PORT = process.env.PORT
const name = process.env.USER
const pass = process.env.PASS

app.use(basicAuth({
    users: { [name] : pass},
    challenge: true,
    realm: 'Area restringida'
}))

app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${URL}${PORT}`)
})