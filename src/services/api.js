import axios from 'axios';
import { API_BASE_URL, PATIENT_API_URL } from '../utils/constants';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const patientApi = axios.create({
  baseURL: PATIENT_API_URL,
});

export const login = async (nameOrEmail, password) => {
  const response = await api.post('/login', { name: nameOrEmail, password });
  return response.data;
};

export const register = async (name, email, password, passwordConfirmation) => {
  const response = await api.post('/signup', { name, email, password, passwordConfirmation });
  return response.data;
};

export const getUserName = async (email) => {
  const response = await api.get(`/name/${email}`);
  return response.data;
};

// As funções relacionadas a pacientes devem usar a patientApi
export const getPatients = async () => {
  const response = await patientApi.get('/patients');
  return response.data;
};

export const getPatientDetails = async (patientId) => {
  const response = await patientApi.get(`/patients/${patientId}`);
  return response.data;
};

export const addPatient = async (patientData) => {
  const response = await patientApi.post('/patients', patientData);
  return response.data;
};

export const updatePatient = async (patientId, patientData) => {
  const response = await patientApi.put(`/patients/${patientId}`, patientData);
  return response.data;
};

export const deletePatient = async (patientId) => {
  const response = await patientApi.delete(`/patients/${patientId}`);
  return response.data;
};

export const getMedicalNotes = async (patientId) => {
  const response = await api.get(`/patients/${patientId}/notes`);
  return response.data;
};

export const addMedicalNote = async (patientId, noteContent) => {
  const response = await api.post(`/patients/${patientId}/notes`, { content: noteContent });
  return response.data;
};

export const setAlertThresholds = async (patientId, thresholds) => {
  const response = await api.post(`/patients/${patientId}/alert-thresholds`, thresholds);
  return response.data;
};
export const logout = async () => {

    return Promise.resolve();
  };
  export const getPatientVitalSigns = async (patientId) => {
    const response = await patientApi.get(`/patients/${patientId}/vitalsigns`);
    return response.data;
  };
export default api;