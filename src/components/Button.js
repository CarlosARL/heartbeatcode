import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

const Button = ({ title, onPress, type = 'primary' }) => {
  const { theme } = useTheme();

  const buttonStyle = type === 'primary' 
    ? { backgroundColor: theme.colors.primary }
    : { backgroundColor: theme.colors.secondary };

  const textColor = type === 'primary'
    ? theme.colors.buttonText
    : theme.colors.text;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;