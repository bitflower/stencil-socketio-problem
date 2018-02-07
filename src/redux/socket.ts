// Source: https://github.com/feathers-plus/feathers-redux

// import { combineReducers } from 'redux';

// Feather redux binding
// import reduxifyServices from 'feathers-redux';

// Feathers client
// import feathers from '@feathersjs/feathers';

// Feathers socket.io bindings
// import feathersSocketIOClient from '@feathersjs/socketio-client';
// import * as socketIo from 'socket.io';
import * as socketIo from 'socket.io';
// import * as socketIo from 'socket.io-client';

// Init Feathers client
// const feathersClient: any = feathers();

// Init socket
const socket: any = socketIo(); // io('http://api.feathersjs.com');

// Set up Feathers client with the socket
// feathersClient.configure(feathersSocketIOClient(socket));

// Create Redux actions and reducers for Feathers services
// const services: any = reduxifyServices(feathersClient, ['repo']);

// console.log('Initializing Feathers Redux bindings');

// // Configure Redux store & reducers
// export default combineReducers({
//   repo: services.repo.reducer
// });

export default socket;
