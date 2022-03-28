//implementar un algoritmo que determine si un string tiene todo suscarateres unicos
//tenemos varias soluciones
//for loop, if conditional, indexOf(), lastIndexOf()

// ingreso mi variable string = 'un string con texto unico';
// con el ciclo for verifico cada palabra del string
// for(i = 1; i < longitud de mi string; incremento i)
// {
//     bloque de codigo:
//     condicional if:
//     si mi palabra tiene la letra o texto que BaseAudioContext;
//     retorne la palabra o texto;
//     sino 
//     retorne falso
// }

// //con indexOf()
// coincidela letra(digame en que posicion)
// //con lastIndexOf()
// ultimaposiciondondeesta(muestre la posicion)

//ahora con codigo segun mi seudocodigo
function uniqueStr (str) {
    for ( var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return false;
        }
    } return true;
}
uniqueStr('cadena')//->false 

//palabra mas larga
function maxWord (str) {
    var words = str.split(' ');//->a array separado por espacios
    var biggestWord = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > biggestWord ) {
            biggestWord = words[i].length;
            //biggestWord = word[i];si queremos retorna la palabra
        }
    }
    return 'the most large wolrd have ' + biggestWord + ' letters';
    //return biggestWord.length;->6
}
maxWord('esta es una cadena');//->6 referente a cadena

//verificar si dos cadenas de texto son una permutacion una de la otra
//se deben comparar si son iguales y comparar los textos y letras
//ejm: 'baseball', 'ballbase', 'sellbaba'-> 2-b, 2-a, 2-l, 1-e
//podemos usar string.split() para transformalo en un array
//luegp array.sort() para odernarlo
//luego array.join() para pasar a texto otra vez
function strPerm(str1, str2) {
    return console.logstr1.split('').sort().join() == str2.split('').sort().join();
    
}
strPerm('baseball', 'sellbaba');//->true

//suma de un rango de numeros
//dado un array de dos numeros hallar la sumatoria de todos los numeros entre
//ese rango, ejem: [1, 4]->1+2+3+4 = 10 o [5,2]->5+4+3+2 = 14
//usaremos Math.max() y Math.min()

function sumRange (array) {
    var min = Math.min(array[0], array[1]);
    var max = Math.max(array[0], array[1]);
    var total = 0;
    for (var i = min; i <= max; i++) {
        total += i;
        console.log(total);//->2,5,9,14,20,27,35
    } return total;
}
sumRange([2, 8])//->35

//remover elementos de un array y retornar el array resultante 
//usaremos array.splice(startindex, elemntos a delete, addition element) que cambia el contenido de un array 
//array.slice(indexstart, indexend(sin tomarlo en cuenta))que devuelve un nuevo array
var travel = ['boat', 'bus', 'car'];
travel.slice(0,1);//->['boat']
console.log(travel);

//otro
var names = ['Edgar', 'Sara', 'Noe', 'Jose'];
names.splice(2,0, 'Saed');//[] no borro nada porque colocamos 0
console.log(names);//->['Edgar', 'Sara', 'Saed' 'Noe', 'Jose']
names.splice(3,1);//-> ['Noe']
console.log(names);//->['Edgar', 'Sara', 'Saed', 'Jose']

//en una funcion
function chopper (arr, excess) {
    arr.splice(0, excess)//->ok aqui llamamos el array dentro de la funcion y le decimos desde donde queremos empezar y cuantos queremos borrar
    return arr;
}
chopper(['232323', 'fgasd', 'January', 'February'], 2)

//verficar si es un palindromo
//split()
//reverse()4
//join()
//toLowerCase()
//regex

//usaremos regex para eliminar todo lo que no sea texto y luego lo transformamos a minusculas
function palindrome (str) {
    str = str.replace(/\W/g, '').toLowerCase();
//ahora retornamos el valor dentro de parentesis para devolver un true or false, split->array->reverse arrays->join->string!!!
    return (str === str.split('').reverse().join(''));
}
console.log(palindrome('Eva, Can I Stab Bats In A Cave?'))