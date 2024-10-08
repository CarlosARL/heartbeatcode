import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import Button from './Button';
import { setAlertThresholds } from '../services/api';

const AlertModal = ({ visible, onClose, patientId }) => {
  const [minBPM, setMinBPM] = useState('');
  const [maxBPM, setMaxBPM] = useState('');
  const [minSpO2, setMinSpO2] = useState('');
  const { theme } = useTheme();

  const handleSave = async () => {
    try {
      await setAlertThresholds(patientId, {
        minBPM: parseInt(minBPM),
        maxBPM: parseInt(maxBPM),
        minSpO2: parseInt(minSpO2),
      });
      onClose();
    } catch (error) {
      console.error('Error setting alert thresholds:', error);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, { backgroundColor: theme.colors.background }]}>
          <Text style={[styles.title, { color: theme.colors.text }]}>Configurar Alertas</Text>
          
          <TextInput
            style={[styles.input, { color: theme.colors.text, borderColor: theme.colors.border }]}
            placeholder="BPM Mínimo"
            placeholderTextColor={theme.colors.text}
            value={minBPM}
            onChangeText={setMinBPM}
            keyboardType="numeric"
          />
          
          <TextInput
            style={[styles.input, { color: theme.colors.text, borderColor: theme.colors.border }]}
            placeholder="BPM Máximo"
            placeholderTextColor={theme.colors.text}
            value={maxBPM}
            onChangeText={setMaxBPM}
            keyboardType="numeric"
          />
          
          <TextInput
            style={[styles.input, { color: theme.colors.text, borderColor: theme.colors.border }]}
            placeholder="SpO2 Mínimo"
            placeholderTextColor={theme.colors.text}
            value={minSpO2}
            onChangeText={setMinSpO2}
            keyboardType="numeric"
          />
          
          <View style={styles.buttonContainer}>
            <Button title="Salvar" onPress={handleSave} />
            <Button title="Cancelar" onPress={onClose} type="secondary" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default AlertModal;