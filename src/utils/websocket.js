import io from 'socket.io-client';

let socket;

export const initiateSocket = () => {
  socket = io('http://localhost:5000'); // Replace with your WebSocket server URL
  console.log('Connecting to WebSocket...');
};

export const subscribeToData = (cb) => {
  if (!socket) return;
  socket.on('real-time-data', (data) => {
    console.log('Received data: ', data);
    cb(data);
  });
};

export const disconnectSocket = () => {
  console.log('Disconnecting from WebSocket...');
  if (socket) socket.disconnect();
};
