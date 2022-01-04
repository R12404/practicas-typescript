"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoStatic() {
        return 10;
    }
}
let persona1 = new Persona('Ricardo');
console.log(persona1.getNombre());
