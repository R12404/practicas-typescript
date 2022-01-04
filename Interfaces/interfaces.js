"use strict";
let usuario = { nombreUsuario: 'Juan', password: '1234', confirmarPassword: '1234' };
console.log(usuario);
console.log(usuario.nombreUsuario);
let avion = {
    abordarTransporte: function () {
        console.log('Abordando');
    }
};
avion.abordarTransporte();
