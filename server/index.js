const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const moment = require('moment');
const getCorsOption = require('./utils/config');
const userRouter = require('./routes/users');

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('./utils/users');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

// Development environment returns a cors object with origin key
// set to localhost url
const io = socketio(server, getCorsOption());

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', userRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to the ${user.room}`,
      time: moment().format('h:mm a'),
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

    io.to(user.room).emit('message', {
      user: user.name,
      text: message,
      time: moment().format('h:mm a'),
    });

    callback();
  });

  socket.on('typing', () => {
    const user = getUser(socket.id);
    io.to(user.room).emit('isTyping', {
      user: user.name,
      text: `${user.name} is typing...`,
    });
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
