const express = require('express');
const expressApp = express();
const PORT = 5050;
const httpServer = expressApp.listen(PORT);
const { Server } = require('socket.io');
const ioServer = new Server(httpServer);

const staticController = express.static('public-controller');
const staticDisplay = express.static('public-display');

expressApp.use('/controller', staticController);
expressApp.use('/display', staticDisplay);

ioServer.on('connection', (socket) => {
    socket.on('confirmation', (data) => {
        socket.broadcast.emit('confirmation', data)
    })
})

