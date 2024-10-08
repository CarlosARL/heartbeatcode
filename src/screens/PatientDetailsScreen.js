﻿import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useTheme } from '../hooks/useTheme';
import VitalSignsChart from '../components/VitalSignsChart';
import AlertModal from '../components/AlertModal';
import Button from '../components/Button';
import { getPatientDetails, getPatientVitalSigns } from '../services/api';
import MedicalNotes from '../components/MedicalNotes';

const PatientDetailsScreen = () => {
  const [patient, setPatient] = useState(null);
  const [vitalSigns, setVitalSigns] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const route = useRoute();
  const { patientId } = route.params;
  const { theme } = useTheme();

  useEffect(() => {
    fetchPatientDetails();
    fetchVitalSigns();
  }, []);

  const fetchPatientDetails = async () => {
    try {
      const data = await getPatientDetails(patientId);
      setPatient(data);
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  const fetchVitalSigns = async () => {
    try {
      const data = await getPatientVitalSigns(patientId);
      setVitalSigns(data);
    } catch (error) {
      console.error('Error fetching vital signs:', error);
    }
  };

  if (!patient) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.name, { color: theme.colors.text }]}>{patient.name}</Text>
      <Text style={[styles.info, { color: theme.colors.text }]}>Idade: {patient.age}</Text>
      <Text style={[styles.info, { color: theme.colors.text }]}>Gênero: {patient.gender}</Text>
      <View style={styles.section}>
        <MedicalNotes patientId={patientId} />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Sinais Vitais</Text>
        <VitalSignsChart data={vitalSigns} />
      </View>
      
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Informações Médicas</Text>
        <Text style={[styles.info, { color: theme.colors.text }]}>Diagnóstico: {patient.diagnosis}</Text>
        <Text style={[styles.info, { color: theme.colors.text }]}>Medicamentos: {patient.medications.join(', ')}</Text>
      </View>
      
      
      <Button title="Configurar Alertas" onPress={() => setShowAlert(true)} />
      
      <AlertModal
        visible={showAlert}
        onClose={() => setShowAlert(false)}
        patientId={patientId}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PatientDetailsScreen;