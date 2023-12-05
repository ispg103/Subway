import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { SerialPort, ReadlineParser  } from 'serialport';
import { Server } from 'socket.io';
import { initializeApp } from 'firebase/app';
import * as Firebase from './firebase.js';

const PORT = 3000;
const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());
app.use('/mupi', express.static('public-display'));  // Sirve archivos desde la carpeta public-diplay/Mupi
app.use('/user', express.static('public-controller')); //Sirve archivos desde la carpeta public-controller/Celular

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.table({
    'User:':`http://localhost:${PORT}/public-display`,
    'Mupi:':`http://localhost:${PORT}/public-controller`,
  })
});


// Configuración de Socket.IO
const io = new Server(httpServer, {
  path: '/real-time',
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});


// Configuración de puerto serial - ARDUINO
const protocolConfiguration = {
  path: 'COM10',
  baudRate: 9600
};

const port = new SerialPort(protocolConfiguration);
const parser = port.pipe(new ReadlineParser());

port.on('error', function (err) {
  console.log('Error: ', err.message);
})

// Comunicación Arduino
let counter=""; // C para correcto - I para incorrecto
let arduinoInput=[];


Firebase.getUsers();
let dailySubs = await Firebase.getDailySubs();
console.log("daily subs: ", dailySubs);
io.emit('get-daily-subs', dailySubs);

// Manejo de conexiones y eventos de Socket.IO
io.on('connection', (socket) => {
  console.log("Usuario conectado:", socket.id);
  try {
    socket.on('new-user', (users) => {
      Firebase.createUser(users);
      console.log('Firebase funcionando');
    });
  } catch (error) {
    console.error("Error al crear usuario en Firebase:", error);
  }
  // ... Lógica para eventos y manejo de sockets

  // Ejemplo de uso de eventos

  socket.on('updateScore', (users) => {
    io.emit('update-score-users', users);
    try{
      Firebase.updateUserScore(users, 1);
    }catch{
      console.error("Error al modificar score de usuario en Firebase:", error);
    }
  });

  socket.on('disconnect', () => {
    // Manejar la desconexión del cliente
    console.log('Usuario desconectado');
  });

});


// Manejo de datos del puerto serial
parser.on('data', (data) => {
  io.emit('pressed', data);
  console.log("data", data);
});

// Ruta de prueba
app.get('/', (_, res) => {
  res.send('¡El server esta vivo!');
  console.log("El servidor funciona");
});

