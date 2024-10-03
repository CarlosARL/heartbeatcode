import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/Button';
import PatientCard from '../components/PatientCard';

const HomeScreen = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const navigation = useNavigation();

  // Mockup de dados de pacientes - isso deve vir de uma API no futuro
  const recentPatients = [
    { id: '1', name: 'João Silva', bpm: 72, spo2: 98 },
    { id: '2', name: 'Maria Santos', bpm: 68, spo2: 97 },
    { id: '3', name: 'Pedro Oliveira', bpm: 75, spo2: 99 },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.greeting, { color: theme.colors.text }]}>
        Olá, {user.name}!
      </Text>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Pacientes Recentes
        </Text>
        {recentPatients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onPress={() => navigation.navigate('PatientDetails', { patientId: patient.id })}
          />
        ))}
      </View>
      <Button
        title="Ver todos os pacientes"
        onPress={() => navigation.navigate('Patients')}
      />
      <Button
        title="Adicionar novo paciente"
        onPress={() => navigation.navigate('AddPatient')}
        type="secondary"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;