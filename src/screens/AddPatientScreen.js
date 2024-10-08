import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../hooks/useTheme';
import Input from '../components/Input';
import Button from '../components/Button';
import { addPatient } from '../services/api';

const AddPatientScreen = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { theme } = useTheme();
  const navigation = useNavigation();

  const handleAddPatient = async () => {
    try {
      const newPatient = {
        name,
        birthDate,
        gender,
        address,
        phone,
        email,
      };
      await addPatient(newPatient);
      navigation.goBack();
    } catch (error) {
      console.error('Error adding patient:', error);
      // Mostrar mensagem de erro
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Input
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Data de nascimento"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <Input
        placeholder="Gênero"
        value={gender}
        onChangeText={setGender}
      />
      <Input
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
      />
      <Input
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Adicionar Paciente" onPress={handleAddPatient} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AddPatientScreen;