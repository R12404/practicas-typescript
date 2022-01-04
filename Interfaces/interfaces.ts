interface Usuario {
    nombreUsuario: string;
    password: string;
    // para declarar que un atributo es opcional lo marcamos con el signo de interrogacion
    confirmarPassword?:string; 
}

let usuario:Usuario = {nombreUsuario: 'Juan', password: '1234', confirmarPassword: '1234'};
console.log(usuario);
console.log(usuario.nombreUsuario);

interface Abordar {
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function(){
        console.log('Abordando')
    }
}

avion.abordarTransporte();