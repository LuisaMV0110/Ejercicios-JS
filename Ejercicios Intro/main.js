///1
let miNombre = 'Luisa';
//2
let miApellido = 'Mendoza';
//3
let miEdad = 20;
//4
let miMascota = 'Haru';
//5
let edadMascota = 2;
//6
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
//7
let nombreCompleto = miNombre +' '+ miApellido;
console.log(nombreCompleto);
//8
let textoPresentacion = 'Buenos días, mi nombre es ' + nombreCompleto + ', tengo ' + miEdad + ' años' +'. Mi perrita se llama ' + miMascota + ' y tiene ' + edadMascota + ' años.';
console.log(textoPresentacion);
//9
let sumaEdades = miEdad + edadMascota;
console.log(sumaEdades);
let restaEdades = miEdad - edadMascota;
console.log(restaEdades);
let productoEdades = miEdad * edadMascota;
console.log(productoEdades);
let divisionEdades = miEdad / edadMascota;
console.log(divisionEdades);
//10
miNombre = prompt('¿Cúal es tu nombre?');
console.log(miNombre);

miApellido = prompt('¿Cúal es tu apellido?');
console.log(miApellido);

miEdad = Number(prompt('¿Cúal es tu edad?'));
console.log(miEdad);

miMascota = prompt('¿Cúal es el nombre de tu mascota?');
console.log(miMascota);

edadMascota = Number(prompt('¿Cúal es la edad de tu mascota?'));
console.log(edadMascota);

nombreCompleto = miNombre +' '+ miApellido
console.log(nombreCompleto);

textoPresentacion = 'Buenos días, mi nombre es ' + nombreCompleto + ', tengo ' + miEdad + ' años' +'. Mi perrita se llama ' + miMascota + ' y tiene ' + edadMascota + ' años.';
console.log(textoPresentacion);

sumaEdades = miEdad + edadMascota;
console.log(sumaEdades);

restaEdades = miEdad - edadMascota;
console.log(restaEdades);

productoEdades = miEdad * edadMascota;
console.log(productoEdades);

divisionEdades = miEdad / edadMascota;
console.log(divisionEdades);
//11
const alumno = {
nombre: 'Luisa',
apellido: 'Mendoza',
edad: '20 años',
altura: '1.63 m',
pais: 'Colombia',
ciudad: 'Medellín',
};
console.table(alumno);
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.pais);
console.log(alumno.ciudad);
//12
const mascota ={
nombre:'Haru',
raza:'criolla',
color:'negro',
sexo:'hembra',
edad: '2 años'
};
console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.raza);
console.log(mascota.color);
console.log(mascota.sexo);
console.log(mascota.edad);
//13
let frutas = ['manzana','fresa','mango','sandía','pera'];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
//14
let numeros = [5,15,25,35,45];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
//15
const familia = [
    {
        nombre:'Luisa',
        apellido: 'Mendoza',
        edad:'20 años'
    },
    {
        nombre:'Luis',
        apellido: 'Mendoza',
        edad:'61 años' 
    },
    {
        nombre:'Yolanda',
        apellido: 'Valencia',
        edad:'55 años' 
    },  
    {  
        nombre:'Fernanda',
        apellido: 'Valencia',
        edad:'20 años' 
    },
    {
        nombre:'Haru',
        raza:'Criolla',
        edad:'2 años' 
    }
];
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
//16
let textoAleatorio = frutas[1] + numeros[3] + JSON.stringify(familia[4]);
console.log(textoAleatorio);
//17
miEdad = Number(prompt('¿Cúal es mi edad?'));
let edadCompañero = Number(prompt('¿Cúal es la edad de mi compañero?'));
//18
let edadesIguales = miEdad === edadCompañero;
console.log('Mi edad es igual a la de mi compañero: ' +  edadesIguales);
//19
let soyMayor = miEdad > edadCompañero;
console.log('Mi edad es mayor a la de mi compañero: ' +  soyMayor);
//20
let soyMenor = miEdad < edadCompañero;
console.log('Mi edad es menor a la de mi compañero: ' + soyMenor);
//21
let soyMayorDeEdad = miEdad >= 18;
console.log('Soy mayor de edad: ' + soyMayorDeEdad);
//22
let edadNecesaria = 18;
let alturaNecesaria = 160;
let puedeSubir = edadNecesaria > 6 && alturaNecesaria >= 120;
console.log('Puede subir: ' + puedeSubir);
//23
let pase = 'VIP';
let saldo = 1000;
let puedePasar = pase === 'VIP' || saldo > 1000;
console.log('La persona puede pasar: ' + puedePasar);