import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/Button';

const SettingsScreen = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const { signOut, user } = useAuth();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Configurações</Text>
      
      <View style={styles.setting}>
        <Text style={[styles.settingText, { color: theme.colors.text }]}>Modo Escuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: theme.colors.primary }}
          thumbColor={isDarkMode ? theme.colors.background : "#f4f3f4"}
        />
      </View>
      
      <View style={styles.userInfo}>
        <Text style={[styles.userInfoText, { color: theme.colors.text }]}>
          Usuário: {user.name}
        </Text>
        <Text style={[styles.userInfoText, { color: theme.colors.text }]}>
          E-mail: {user.email}
        </Text>
      </View>
      
      <Button title="Sair" onPress={signOut} type="secondary" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
  userInfo: {
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SettingsScreen;