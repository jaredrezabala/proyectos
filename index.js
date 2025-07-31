const { configDotenv } = require('dotenv')
const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')
configDotenv()
const URL = process.env.URL
const PORT = process.env.PORT
const name = process.env.USER
const pass = process.env.PASS
const path = require('path')

app.use(basicAuth({
    users: { [name] : pass},
    challenge: true,
    realm: 'Area restringida'
}))

app.use('/public', express.static(path.join(__dirname, 'public')))

// Importar rutas
const indexRoutes = require('./routes/index')
const proyecto1Routes = require('./routes/p1-route')
const proyecto2Routes = require('./routes/p2-route')
const adminRoutes = require('./routes/admin-route')

app.use('/', indexRoutes)
app.use('/p1', proyecto1Routes)
app.use('/p2', proyecto2Routes)
app.use('/admin', adminRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${URL}${PORT}`)
})