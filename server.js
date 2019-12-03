require('./config/config');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())

// Configuración global de rutas
app.use(require('./routes/index'));

/**
 * Home del server --> / >_<XD
 */
app.get('/', (req, res) => {

    let objeto = {
        mensaje: "Bienvenidos al REST server - 5APROGM Equipo 02"
    };

    res.send(objeto);

});

app.listen(process.env.PORT, () => {
    console.log("Server running on port ", process.env.PORT);
});