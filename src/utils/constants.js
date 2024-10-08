export const API_BASE_URL = 'http://localhost:3001'; // API_LOGIN_Projeto_HeartbeatSecurity
export const SOCKET_URL = 'http://localhost:5001'; // SERVER_PARA_DADOS_ESP32
export const PATIENT_API_URL = 'http://localhost:3002'; // API_PACIENTES (assumindo que esta API está rodando na porta 3002)

// ... resto do arquivo permanece o mesmo
export const ROUTES = {
  LOGIN: 'Login',
  REGISTER: 'Register',
  HOME: 'Home',
  PATIENT_LIST: 'PatientList',
  PATIENT_DETAILS: 'PatientDetails',
  ADD_PATIENT: 'AddPatient',
  SETTINGS: 'Settings',
};

export const VITAL_SIGNS_LIMITS = {
  BPM_MIN: 60,
  BPM_MAX: 100,
  SPO2_MIN: 95,
};