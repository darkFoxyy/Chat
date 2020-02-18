const express = require('express')
const path = require('path')
const socket = require('socket.io')


const staticPath = path.join(__dirname, '../static')

const app = express()

const port = 3000

app.use(express.static(staticPath))

const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('catch', msg)
    });
  });
server.listen(port);

