const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
const port = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {

  socket.on('message', msg => {
    switch (msg.recipient) {
      case 'server':
        console.log(`We got message from ${msg.sender} to ${msg.recipient}: ${msg.message}`);
        break;
      case 'about':
        io.emit('about', msg);
        break;
      case 'contacts':
        io.emit('contacts', msg);
        break;
    }
  });

});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});