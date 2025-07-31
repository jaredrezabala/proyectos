const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`
        <h1>Mis proyectos personales</h1>
        <ul>
            <li><a href="/p1">Proyecto 1</a></li>
            <li><a href="/p2">Proyecto 2</a></li>
            <li><a href="/admin">Admin tools</a></li>
        </ul>
    `)
})

module.exports = router
