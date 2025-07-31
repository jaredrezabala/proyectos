const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('http://localhost:5173')
})

module.exports = router
