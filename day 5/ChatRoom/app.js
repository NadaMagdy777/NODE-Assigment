var express = require('express')
var app = new express()

var http = require('http').createServer(app)
var io = require('socket.io')(http)

io.on('connect', function(client){
    console.log(client)

    client.on('message', function(data){
        
        io.sockets.emit('all', data)         
    })
});

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
});
  
http.listen(3000)