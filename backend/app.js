const express = require('express');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http);

io.on('connection', socket => {
    console.log('a user connected');
});


app.get('/something', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      text: 'Done',
    },
  });
});


module.exports = http;