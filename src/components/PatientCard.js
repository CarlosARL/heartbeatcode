import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const PatientCard = ({ patient, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.colors.card }]}
      onPress={onPress}
    >
      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.colors.text }]}>{patient.name}</Text>
        <View style={styles.vitals}>
          <View style={styles.vitalItem}>
            <Icon name="heart" size={20} color={theme.colors.primary} />
            <Text style={[styles.vitalText, { color: theme.colors.text }]}>
              {patient.bpm} BPM
            </Text>
          </View>
          <View style={styles.vitalItem}>
            <Icon name="water" size={20} color={theme.colors.primary} />
            <Text style={[styles.vitalText, { color: theme.colors.text }]}>
              {patient.spo2}% SpO2
            </Text>
          </View>
        </View>
      </View>
      <Icon name="chevron-forward" size={24} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  vitals: {
    flexDirection: 'row',
  },
  vitalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  vitalText: {
    marginLeft: 5,
  },
});

export default PatientCard;
