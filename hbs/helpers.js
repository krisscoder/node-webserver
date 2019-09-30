const hbs = require('hbs');
//Helpers de HBS
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabra = texto.split(' ');
    palabra.forEach((palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabra.join(' ');
});