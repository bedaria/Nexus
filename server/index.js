'use strict';
require('./models/models.js');

const express = require('express');
const port = process.env.PORT || 4200;
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/api/hello', (req, resp) => {
  resp.send("hellor")
})

io.on('connection', socket => {
  console.log("user connected")

  socket.on('disconnect', () => console.log("user disconnected"));
  socket.on('announce', (msg) => {
    console.log("received message! ", msg)
    io.emit('a', msg)
  })
});

// app.listen(3000, () => console.log('Listening on port ', port));
server.listen(3000, () => console.log("listening"));
