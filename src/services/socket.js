﻿import io from 'socket.io-client';
import { SOCKET_URL } from '../utils/constants';

let socket;

export const initSocket = () => {
  socket = io(SOCKET_URL);

  socket.on('connect', () => {
    console.log('Connected to socket server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from socket server');
  });

  socket.on('data', (data) => {
    console.log('Received data:', data);
    // Aqui você pode adicionar lógica para lidar com os dados recebidos
  });

  return socket;
};

export const getSocket = () => {
  if (!socket) {
    return initSocket();
  }
  return socket;
};


export const subscribeToPatient = (patientId, callback) => {
  if (!socket) initSocket();
  socket.emit('subscribe', patientId);
  socket.on(`vitalSigns:${patientId}`, callback);
};

export const unsubscribeFromPatient = (patientId) => {
  if (socket) {
    socket.emit('unsubscribe', patientId);
    socket.off(`vitalSigns:${patientId}`);
  }
};