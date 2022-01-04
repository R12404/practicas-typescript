// Un decorador es una caracteristica agregada a es6
// Un decorador nos permite agregar funcionalidad sin modificar nuestra clase a la que queremos modificar 
// Los decoradores empiezan por @

function saludar(target: Function): void{
    target.prototype.saludos = function():void{
        console.log('Hola desde decoradores')
    }
}

@saludar
class Hola {
    constructor(){}
}

let hola1 = new Hola();
hola1.saludos();