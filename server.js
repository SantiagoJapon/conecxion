const express = require('express')
const initDB = require('./config/db')
const app = express()
const port = 3001

app.get('/',(req, res) => {
    res.send({
        data: 'Hola mundo'
    })
})

app.listen(port, () => {
    console.log('Esta app esta en linea')
})

initDB()