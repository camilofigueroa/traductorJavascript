/**
 * Autor: Camilo Figueroa ( Crivera )
 * Este archivo contiene las principales funciones y funcionalidades del traductor.
 */

var arreglo_palabras = new Array();
            
arreglo_palabras.push( [ [ "perro" ],       [ "dog" ] ] );
arreglo_palabras.push( [ [ "gato" ],        [ "cat" ] ] );
arreglo_palabras.push( [ [ "loro" ],        [ "parrot" ] ] );
            
console.log( arreglo_palabras );


//------------------Todo el c�digo de las funciones est� aqu�----------------------

/**
 * Esta función se encarga de recibir el evento de digitar en el texto de traducci�n.
 * También se encarga de llamar a otras funciones.
 */
function al_digitar()
{
   traducir(); 
}

/**
 * Esta función se encargada de realizar la traducción. Obviamente hará el llamado de otras funciones. 
 *
 */
function traducir()
{
    var texto = document.getElementById( "texto-entrada" ).value; //Esto solo debe hacerse una vez.
    var arreglo_palabras = texto.split( " " ); //En esta linea de código separa todas las palabras y las coloca en el vector.
    var panel_salida = document.getElementById( "contenedor-salida" );
    
    console.log( "El tamaño del vector o el número de palabras es " + arreglo_palabras.length );
    
    for( var i = 0; i < arreglo_palabras.length; i ++ )
    {
        console.log( arreglo_palabras[ i ] );        
    }
    
    console.log( arreglo_palabras );
}

