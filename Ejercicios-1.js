/*
1) Programa una función que cuente el número de caracteres de una cadena 
de texto, pe. miFuncion("Hola Mundo") devolverá 10.

2) Programa una función que te devuelva el texto recortado 
según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 
4) devolverá "Hola".

3) Programa una función que dada una String te devuelva un Array de textos 
separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá 
['hola', 'que', 'tal'].

4) Programa una función que repita un texto X veces, pe. 
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

// 1)

let cadena = "cadena de texto";

function caracteres() {
    if (tipeOf(cadena) === string) {
        return cadena.length;
    }
}

// 2)

let recorte = "Este texto será recortado";

function recortar() {
    return recorte.slice(5,10);
}

// 3)

let arreglo = "Esta cadena se convertirá en un array";

function separar() {
    return arreglo.split(" ");
}

// 4)

let repeticiones = "Esta frase se repetirá";

function repetir() {
    return repeticiones.repeat(5);
}