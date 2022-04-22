const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hola a todos los explorers")
})

app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a launchX")
})

app.get('/node', (req, res) =>{
    const explorer1 = {id:1, name: "Explorer"}
    const explorer2 = {id:2, name: "Explorer"}
    const explorer3 = {id:3, name: "Explorer"}
    res.send([explorer1,explorer2,explorer3])
})



app.listen(port, () => {
    console.log("Server Listo!")
})