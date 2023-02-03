const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();

const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: true,
        credentials: true,
    },
    allowEIO3: true,
});

io.on('connection', (socket) => {
    console.log('We have a new connection!!!');

    socket.on('disconnect', () => {
        console.log('User had left!!!');
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on localhost:${PORT}`));
