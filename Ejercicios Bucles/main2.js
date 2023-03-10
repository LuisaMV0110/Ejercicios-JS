//1
/* let multiplos=[];
let numero = Number(prompt('Escribe un número'));
for(let i = 1; multiplos.length < 10 ; i++){
    function multiplo(numero,multiplo){
        let resto = numero % multiplo;
        if(resto === 0){
            return true;
        }
        else{
            return false
        }
    }
    if(multiplo(i,numero)){
        multiplos.push(i);
    }
}
console.table(multiplos); */
console.log('------------------');
//2
/* let aux = []; 
while(numero !== 0){
    numero = Number(prompt("Ingrese un número"));
    if(numero !== 0){
        aux.push(numero);
    }
    else{
        break; 
    }
    console.log(aux);
}*/
console.log('------------------'); 
//3
/* let numeroSorteo = 25; */ //Número fijo
let numeroSorteo = Math.random()*100; //Número semi-aleatorio
numeroSorteo = parseInt(numeroSorteo);
let num;
let intentos = [];
/* while(num !== numeroSorteo){
    num = Number(prompt("Adivina el número"));
    if(num > numeroSorteo){ 
        intentos.push(num);
        console.log('El número a adivinar es menor a ' + num);
    }
    else if(num < numeroSorteo){
        intentos.push(num);
        console.log('El número a adivinar es mayor a ' + num);
    }
    else{
        console.log('¡Lo adivinaste! El número era ' + numeroSorteo + ' y lo hiciste en ' + intentos.length + ' intentos.');
    }
}  */
console.log('------------------');
//4
/*numero = Number(prompt("Ingrese un número"));
let conteo = 0;
for(let i = 0; i <= numero; i++){
    if((numero % i) === 0){
        conteo = conteo + 1;
    }
};
if(conteo === 2){
    console.log('Es primo');
}
else{
    console.log('No es primo');
};*/
console.log('------------------');
//5
/* numero =  prompt('Ingrese el numero ')
let divisores =[];
for( let i=0; i <= numero; i++){
    if(numero %i == 0){
        divisores.push(i);
    }
} 
console.log(divisores); */
//6
/* let alimentos = ['papa','cebolla','ajo','zanahoria','lechuga','pera','guayaba','mango','sandia','manzana'];
for(let element of alimentos){
    console.log(element);
}; */
console.log('------------------');
//7
let numbers = [21,25,31,9,1,10,59,15,4,8];
/*for(let num of numbers){
    console.log(num *2);
}; */
console.log('------------------');
//8
/* const familia = [
    {
        nombre:'Pepita',
        edad:'20 años',
        comidaFavorita: 'la hamburguesa',
        colorFavorito: 'Azul',
    },
    {
        nombre:'Fulano',
        edad:'61 años',
        comidaFavorita: 'el arroz', 
        colorFavorito: 'Verde',
    },
    {
        nombre:'Fulana',
        edad:'55 años',
        comidaFavorita: 'la sopa',
        colorFavorito: 'Negro',
    },  
    {  
        nombre:'Fulanito',
        edad:'20 años',
        comidaFavorita: 'las papas',
        colorFavorito: 'Negro',
    },
    {
        nombre:'Fulanita',
        edad:'2 años',
        comidaFavorita: 'el pollito',
        colorFavorito: 'Naranja',
    }
];
for(let i = 0; i <= familia.length - 1; i++){
    console.log('Mi nombre es ' + familia[i].nombre + ' tengo ' + familia[i].edad + ', mi comida favorita es ' + familia[i].comidaFavorita + '. Ademas, mi color favorito es el ' + familia[i].colorFavorito + '.');
}; */
console.log('------------------');
//9
/* array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let impares=[];
for(let i=0; i<10; i++){
    if(array[i] %2 !==0)
    impares.push(array[i]);
};
console.log(impares); */
console.log('------------------');
//10

let number;
let list = [];
let sumaPares = [];
let sumaImpares = [];

while (number !== 0) {
    number = prompt('Ingrese un numero: ');
    number = parseInt(number);
    list.push(number);
}
let resultado = 0;
let resultado2 = 0;
function numeros(lista) {
    for (let numero of lista) {
        if (numero %2 === 0) {
            sumaPares.push(numero)
            resultado = resultado + numero
        } else if (numero %2 !== 0) {
            sumaImpares.push(numero)
            resultado2 = resultado2 + numero
        }
    }
}
numeros(list);
console.log(list);
console.log(resultado);
console.log(resultado2);

console.log('------------------');
//11
/* numbers = [21,25,31,9,1,10,59,15,4,8];
function max(array){
let max = array[0];
for(let i = 0; i < array.length; i++){
    if(max < array[i]){
        max = array[i];
    }
}
return console.log('El número más grande del array es: ' + max);
}
max(numbers); */
console.log('------------------');
//12
/* numbers = [21,25,31,9,1,10,59,15,4,8];
function min(array){
    let min = array[0];
    for(let i = 0; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
}
return console.log('El número más pequeño del array es: ' + min);
}
min(numbers); */
console.log('------------------');
//13
/* const TIJERA = 'tijera';
const PIEDRA = 'piedra';
const PAPEL = 'papel';
let jugadorUno = prompt('Ingrese el nombre del jugador 1');
let jugadorDos = prompt('Ingrese el nombre del jugador 2');
let opcJugadorUno;
let opcJugadorDos;
while(opcJugadorUno === opcJugadorDos){
    opcJugadorUno = prompt('Turno de ' + jugadorUno + ', Piedra, Papel o Tijera?').toLowerCase();
    opcJugadorDos = prompt('Turno de ' + jugadorDos + ', Piedra, Papel o Tijera?').toLowerCase();
    if(opcJugadorUno === opcJugadorDos){
        console.log('Empate, vuelvan a intentar');
    }
    else if(opcJugadorUno === 'tijera' && opcJugadorDos === 'papel'){
        console.log('Ha ganado ' + jugadorUno);
    }
    else if(opcJugadorUno === 'papel' && opcJugadorDos === 'piedra'){
        console.log('Ha ganado ' + jugadorUno);
    }
    else if(opcJugadorUno === 'piedra' && opcJugadorDos === 'tijera'){
        console.log('Ha ganado ' + jugadorUno);
    }
    else if(opcJugadorDos === 'tijera' && opcJugadorDos === 'papel'){
        console.log('Ha ganado ' + jugadorDos);
    }
    else if(opcJugadorDos === 'papel' && opcJugadorDos === 'piedra'){
        console.log('Ha ganado ' + jugadorDos);
    }
    else if(opcJugadorDos === 'piedra' && opcJugadorDos === 'papel'){
        console.log('Ha ganado ' + jugadorDos);
    }
    } */
console.log('------------------');
//14
for(let i = 1; i <= 5; i++){
    let resultado = '';
    for(let j = 1; j <= i; j++){
        resultado += '* ';
    }
    console.log(resultado);
}
console.log('------------------');
//15
for(let i = 5; i >= 1; i--){
    let resultado = '';
    for(let j = 1; j <= i; j++){
        resultado += '* ';
    }
    console.log(resultado);
}
console.log('------------------');
//16
numbers = [21,25,31,9,1,10,59,15,4,8];
function Burbuja(array) {
    let n, i, k, aux;
    n = array.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (array[i] > array[i + 1]) {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }
    }

    console.log(array);
}
Burbuja(numbers);

console.log('------------------');
