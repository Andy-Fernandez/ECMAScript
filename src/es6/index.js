//CAMBIOS:
//1. Parametros por defecto
//ANTES:
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age ||32;
    var country = country || 'BO'
    console.log(name,age,country);
}

//es6
function newFunction2(name = 'Oscar', age = 32, country = 'BO'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo','23','CO');

//2. Templates literals (Nos permite separar o unir elementos)
//ANTES
let hello = "Hello";
let world = "World";
let ephicPhrase = hello + ' ' + world;
console.log(ephicPhrase)

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//3. Multilinea
//ANTES
let lorem = "Esta es un frase epica xd \n"
+ "otra frase epica :v.";

//es6
let lorem2 = `solo con un enter y comillas francesas
podemos hacer un salto de linea
y ya está`;

console.log(lorem);
console.log(lorem2);

//4. Destructuracion de elementos
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'BO'
}

//ANTES
console.log(person.name, person.age);

//ec6
let{name,age,country} = person;
console.log(name,age,country);

//5. Operador de propagacion
//ec6
let team1 = ['Oscar','Julian','Ricado'];
let team2 = ['Valeria','Yesica','Camila'];

let education = ['David', ...team1, ...team2];

console.log(education)

//6. let
//Antes teniamos 'var' que es una varible con alcance global
//ahora tenemos 'let' que nos da un alcance en el bloque en
//el que estamos trabajando
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet); No es accesible de forma global

//7. Se añade 'const', una variable que no cambia
const a = 'b';
//a = 'a'; no se puede hacer cambios a 'const'
console.log(a)

//8. Propiedad de objetos mejorada
let name = 'Oscar';
let age = 32;

//ANTES
obj = {name: name, age: age}
//De esta forma creamos un objeto con los valores
//ya establecidos

//es6
obj2 = {name,age}
console.log(obj2)

//9. Arrow functions
//Crearemos un arreglo de objetos
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age:27}
]

//Cremos una funcion anonima para quen nos de
//el nombre de cada uno de los objetos en el arreglo
let listOfNames = names.map(function(item){
    console.log(item.name)
})

//es6
let listOfNames2 = names.map(item => console.log(item.name))

//Otra forma de uso es:

const listOfNames3 = (name, age, country) => {
    //aqui ponemos la función anonima que queremos usar
}

//En caso de que estemos pasando un solo parametro:
const listOfNames4 = name => {
    //aqui el bloque de codigo
}

const square = num => num*num;

//10. Promesas (aqui trabajamos el asincronismo)
//'Algo va a pasar'
const hellowPromise = () => {
    return new Promise((reolve,reject) => {
        if(true){
            reolve('Hey!');
        }else{
            reject('Ups!!');
        }
    });
}

//Cómo ejecutamos nuestra promesa?
hellowPromise()
    .then(response => console.log(response))
    //.then(() => console.log('hola')) esto en caso de tener otra alternativa
    .catch(error => console.log(error));

//11. Hablemos de clases:

class calculator{
    constructor(){
        this.valuaA = 0;
        this.valuaB = 0;
    }
    sum(valueA, valueB){
        this.valuaA = valueA;
        this.valuaB = valueB;
        return this.valuaA + this.valuaB;
    }
}
//Como la hacemos correr:
const calc = new calculator();
console.log(calc.sum(2,2));

//12. Import y export, trabajemos con modulos
import { hello } from './module';

hello();

//13. Generators, retorna una serie de valores según el algoritmo definido
//Un caso claseico es la seride de fibonacci
function* helloWold(){
    if (true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWold();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);