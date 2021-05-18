//aplicar la configuracion para descargar npm aplications
//npm init
//scrips creadas por nosotros para correr ese codigo seria
//npm run base10
//bajar otra app pero que no sea una dependecia solo para desarrollo 
//npm install nodemon --save-dev
//desistalar las app 
//npm uninstall demon
//instalar cierta version 
//npm i colors@1.0.0
//actualizar 
//npm update


// exportando el archvio de file sytem
//esportar otro archivo 
const { crearArchivo } = require('./helpers/multiplicar');
//exportar el modulo yargs
const argv = require('./config/yargs');
//exportacion colores
const colors = require('colors');


console.clear();

//desestructurar
//argumentos que bienen de la consolar process.argv 
//los espacios en blanco son lugares ya que primero es el enrutado global en rutado de la app y el siguente elq ue pusismos
// const [ , , arg3 = 'base=5'  ] = process.argv 
//para quietar el argumento y solo quede el numero 
// const [, base = 5 ] = arg3.split('=');

// aplicacions yargs

// console.log(process.argv);
//imprecion de todo lo que contiene
// console.log(argv);
//--base == base: yargs, 5 == argv.base = El argumento 
// ya biene con el help configurado  b==base
// console.log('base: yargs', argv);




// const base = 4;

      crearArchivo( argv.b , argv.l, argv.h) 
          .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
          .catch(err => console.log(err));
        