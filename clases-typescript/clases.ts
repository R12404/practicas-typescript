class Persona {

    private nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    getNombre():string {
        return this.nombre;
    }

    static metodoStatic(): number{
        return 10;
    }
}

let persona1 = new Persona('Ricardo');
console.log(persona1.getNombre())