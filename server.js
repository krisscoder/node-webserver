const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//middleware para servir cualquier archivo en la carpeta /public
app.use(express.static(__dirname + '/public'));

//HBS engine: libreria para usar templates 
hbs.registerPartials(__dirname + '/views/partials/');
app.set('view engine', 'hbs');



//genera pagina principal del sitio publico
app.get('/', function(req, res) {
    res.render('home.hbs', {
        //define variables para usar en el template HBS
        nombre: 'Cristian'
    })
})

//genera pagina /about
app.get('/about', function(req, res) {
    res.render('about.hbs')
})

app.listen(port, () => {
    console.log('Escuchando en', port);
});