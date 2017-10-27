var express = require('express');
var app = express();

/*为使用socket.io而添加的*/
var server = require('http').Server(app);
var io = require('socket.io')(server);

// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  //res.send('start socket.io...');
   res.sendFile(__dirname + '/index.html');
});

/*为使用socket.io而添加的*/
io.on('connection', function (socket) {
  //socket.emit('news', { hello: 'world' });
  //socket.on('my other event', function (data) {
    //console.log(data);
  //});
  //socket.broadcast.emit('user connected');
  console.log('a user connected');
});

// 网站首页接受 POST 请求
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

var server = app.listen(3000, function () {//原端口3000
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});