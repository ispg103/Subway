const express = require('express');
const http = require("http")
const cors = require('cors');
const PORT = 3000
const {SerialPort} = require('serialport');
const {ReadlineParser} = require('@serialport/parser-readline');


const app = express();
app.use(cors())
const server = http.createServer(app);;

//ArduANO

const protocolConfiguration = {
  path: 'COM3',
  baudRate: 9600
}

const port = new SerialPort(protocolConfiguration);
const parser = port.pipe(new ReadlineParser());



SerialPort.list().then(
  ports => ports.forEach(port => console.log(port.path)), //COM3
  err => console.log(err)
)

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use('/public-display', express.static('mupi'))
app.use('/public-controller', express.static('client'))
app.use(express.json())

//Comportamiento del servidor
const io = require('socket.io')(server, {
  path: '/real-time',
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});



//let playersConnected = 0;
//let firstPressed = false;
//let colors = ['red', 'magenta', 'yellow', 'bopIt', 'orange', 'blue', 'button'];
//function randomColor() {
  //const index = Math.floor(Math.random() * colors.length);
  //return colors[index];
//}
//let currentColor = randomColor();

const users = []

//let assigned = {};

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

parser.on('data', (data) => {
  console.log("data", data);
  io.emit('pressed', data);
});

io.on('connect', (socket) => {
    console.log("Client connected:" );
    
    console.log("players connected:", playersConnected)

    socket.on('mupi-connected', () => {
      console.log("mupi connected")
    });

    parser.on('data', (data) => {
      console.log("this is my data", data);
      socket.emit('pressed', data);
    });
    
    socket.on('user-connected', () => {
      usersConnected++;
      console.log("users connected:", usersConnected)
      console.log(users)

    });
    
    //socket.on('users-details', (data) => {
      //if (data.id == users.id) {
        //users = data;
      //} else if(data.id == players.player2.id) {
        //players.player2 = data;
      //}

      //console.log("Players: ", players)
      //io.emit('players-data', players);
    //})


  socket.on('waiting-screen', () => {
    io.emit("screen-change");
  });


    //socket.on("send-item", (user) => {
        //if (!firstPressed) {
            //firstPressed = true;
            //io.emit('first-player-pressed', user.name); // Emitir a todos los jugadores
        //}
        
        //console.log(user.name, user.score)
        //socket.broadcast.emit("other-player-pressed", user.name);
    //})

    socket.on('updateScore', (winner) => {
        io.emit('update-score-player', winner);
    
      
    });

    //socket.on("disconnect", () => {
      //console.log("Cliente desconectado:", socket.id);
      //if (players.player1.id === socket.id || players.player2.id === socket.id) { 
          //if (players.player1.id === socket.id) {
            //players.player1 =
           //{
            //id: 0,
            //name: "",
            //birthday: "",
            //email: "",
            //score: 0,
            //color: "",
            //isWaiting: false,
          //}
          //}
          
          //if (players.player2.id === socket.id) 
          //{ players.player2 = {
            //id: 0,
            //name: "",
            ////birthday: "",
            //email: "",
            //score: 0,
           // color: "",
            //isWaiting: false,
          //}
          //};

          //playersConnected--;
          //console.log("Jugador desconectado. Total de jugadores:", playersConnected);
      //} else {
          //console.log("Mupi desconectado");
          // Código para manejar la desconexión del mupi...
      //}
  //});
});


