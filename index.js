import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { SerialPort } from 'serialport';
import { ReadlineParser } from 'serialport';
import { Server } from 'socket.io';

const PORT = 3000;
const app = express();

// Configuración CORS y creación del servidor HTTP
app.use(cors());
const httpServer = createServer(app);

// Configuración de puerto serial
const protocolConfiguration = {
  path: 'COM10',
  baudRate: 9600
};

const port = new SerialPort(protocolConfiguration);
const parser = port.pipe(new ReadlineParser());

// Escucha en el puerto especificado
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Rutas estáticas
app.use('/public-display', express.static('mupi'));
app.use('/public-controller', express.static('client'));
app.use(express.json());

// Configuración de Socket.IO
const io = new Server(httpServer, {
  path: '/real-time',
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Manejo de conexiones y eventos de Socket.IO
io.on('connect', (socket) => {
  console.log("Client connected:");

  // ... Lógica para eventos y manejo de sockets

  // Ejemplo de uso de eventos
  socket.on('waiting-screen', () => {
    io.emit("screen-change");
  });

  socket.on('updateScore', (winner) => {
    io.emit('update-score-player', winner);
  });
});

// Manejo de datos del puerto serial
parser.on('data', (data) => {
  console.log("data", data);
  io.emit('pressed', data);
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});
