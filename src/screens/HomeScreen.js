import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { getPatients } from '../services/api';
import PatientCard from '../components/PatientCard';
import Button from '../components/Button';

const HomeScreen = () => {
  const [patients, setPatients] = useState([]);
  const { user } = useAuth();
  const { theme } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const data = await getPatients();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
      alert('Erro ao buscar pacientes');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.greeting, { color: theme.colors.text }]}>
        Olá, {user?.name || 'Usuário'}!
      </Text>
      <FlatList
        data={patients}
        renderItem={({ item }) => (
          <PatientCard
            patient={item}
            onPress={() => navigation.navigate('PatientDetails', { patientId: item._id })}
          />
        )}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: theme.colors.text }]}>
            Nenhum paciente encontrado
          </Text>
        }
      />
      <Button
        title="Adicionar Paciente"
        onPress={() => navigation.navigate('AddPatient')}
      />
    </View>
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
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;