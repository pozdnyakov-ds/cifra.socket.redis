const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
const port = process.env.PORT || 4000;

const redis = require('redis');
const client = redis.createClient({url: 'redis://10.15.6.28:6380'});

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
  
  socket.on('message', msg => {
    d = Date();

    (async () => {
      await client.connect();
  
      console.log("New record for Redis: ", d, msg);
      
      client.set(d, JSON.stringify(msg)).then(() => {
        console.info("Record done");
        client.disconnect();
      });
  
      
    })()
        
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