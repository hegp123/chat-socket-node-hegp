const { io } = require('../server');

io.on('connection', (client) => {
    console.log(`usuario conectado... ${client.id}`);

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion.'
    });

    client.on('disconnect', () => {
        console.log(`usuario Desconectado... ${client.id}`);
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (data.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL!!!!!'
        //     });

        // }
    });


});