var socket = io();

socket.on('connect', function() {
    console.log(`Conectado al servidor...`);
});

//escuchar
socket.on('disconnect', function() {
    console.log(`Perdimos conexion con el servidor...`);
});

//Envia informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Hector Garcia',
    mensaje: 'Hola Mundo...'
}, function(resp) {
    console.log(resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});