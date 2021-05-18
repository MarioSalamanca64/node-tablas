const fs = require('fs');
const colors = require('colors');



const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';


    for(let i = 1 ; i <= hasta ; i++ ){ 
        salida += ( `${base} x ${i} = ${base * i}\n`); 
        consola += ( `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`); 
    }

    if(listar){
            
        console.log('====================='.red);
        console.log('    Tabla del:' , base );
        console.log('====================='.red);
        console.log(consola);
    }

    // paraguardar los datos de las tablas ponemos el en rutado de la carpeta donde se guarden
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
    
    return(`tabla-${base}.txt`);
    
        
    } catch (error) {
        throw console.log('hubo un error');
    }

// para crear el archivo de las tablas 
//primera forma
// fs.writeFile( `tabla-${base}.txt` , salida, (err) => {
//     if (err) throw err;
//     console.log(`tabla-${base}.txt Creada`);
// })

//solo que tenemos que tratarlo con el error

}

//exportar a otro archivo 
module.exports = {
    crearArchivo
}