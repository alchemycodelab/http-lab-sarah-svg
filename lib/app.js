const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    console.log(request, 'hellppppppp');

    if(request.path === '/' && request.method === 'GET')
      socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
  
  
  });
});

module.exports = app;
