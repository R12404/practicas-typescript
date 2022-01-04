let saludo = 'Hola mundo desde typescript'
let numero = 10;
// Crear variables que pueden almaccenar cualquier tipo de dato
let cualquierDato: any;
cualquierDato = 10;
cualquierDato = 'Hola crack';


// Definicion de constantes con typescript
// Las variables constantes deben ser declaradas con letras mayusculas, si es màs de una palabra se separan por guion bajo
const PI = 3.14;


function saludar() {
    console.log(saludo);
    console.log(numero)
}

saludar();