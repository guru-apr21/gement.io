const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const { ORIGIN_URI } = require('./config');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: ORIGIN_URI,
    methods: ['GET', 'POST'],
  },
});

app.use(router);
app.use(cors());

io.on('connection', (socket) => {
  console.log('New user connected!!');
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to the ${user.room}`,
    });

    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name}, has joined!` });

    socket.join(user.room);

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    console.log(`${user.name} left`);
    if (user)
      io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name} has left the chat.`,
      });
    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
