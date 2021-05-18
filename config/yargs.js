const { number } = require('yargs');

// exportar yargs
const argv = require('yargs')
//podremos las opciones de yargs b == 
.option('b',{
    alias: 'base',
    type:'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar' 
})
.option('l', {
    alias:'listar',
    type: 'boolean',
    default:false,
    describe:'Muestra la tabla en consola'
}).option('h',{
    alias:'hasta',
    type: 'number',
    default: 10,
    describe:'hasta donde quieres que llege la tabla'
})
//es una directiva si los datos son nan osea otros que no sean number 
//si todo es correcto se manda un return true 
.check((argv,options) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
    }
    return true;   
})
//debemos checar si ciertas condiciones se cumplen
.argv;

// exportar este modulo no es un objeto solo se manda argv
module.exports = argv;