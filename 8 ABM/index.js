'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
var path = require('path')

// ========================= CONEXIÓN A MONGODB =========================================
mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar con la base de datos: ${err}`)
    }
    console.log('Conexión a la base de datos establecida!')

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });



    app.listen(config.port, () => {
        // ES6: Hemos utilizado la "arrow function" para sustituir "function()" por "()=>"
        // ES6: Para poder utilizar ${port} tendremos que sustituir los delimitadores de strings '' por `` (acentos invertidos que están al lado de la letra P)
        console.log(`API REST corriendo en un http://localhost:${config.port}`)
    })
})
