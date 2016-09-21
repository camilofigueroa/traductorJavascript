/**
 * Autor: Camilo Figueroa ( Crivera )
 * Este archivo contiene las principales funciones y funcionalidades del traductor.
 */

var diccionario_palabras = new Array();
            
diccionario_palabras.push( [ [ "perro" ],       [ "dog" ] ] );
diccionario_palabras.push( [ [ "gato" ],        [ "cat" ] ] );
diccionario_palabras.push( [ [ "loro" ],        [ "parrot" ] ] );
            
console.log( diccionario_palabras );


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
    var traduccion = "";
    var palabra_temporal = "";
    
    //console.log( "El tamaño del vector o el número de palabras es " + arreglo_palabras.length );
    
    for( var i = 0; i < arreglo_palabras.length; i ++ ) //Aquí se recorre el vector que se genera de separar el texto del usuario.
    {
        for( var j = 0; j < diccionario_palabras.length; j ++ ) //Aquí se recorre el vector que sirve de diccionario de palabras.
        {
            if( arreglo_palabras[ i ] == diccionario_palabras[ j ][ 0 ] )
            {
                palabra_temporal = diccionario_palabras[ j ][ 1 ];
                break;
                
            }else{
                    palabra_temporal = arreglo_palabras[ i ];        
                }
        }
        
        traduccion += " " + palabra_temporal; 
        //console.log( arreglo_palabras[ i ] );        
    }
    
    console.log( arreglo_palabras );
    panel_salida.innerHTML = traduccion;
}

