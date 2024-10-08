import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const { theme } = useTheme();
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.error(error);
      alert('Falha no login. Por favor, verifique suas credenciais.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image source={require('../../assets//images/logo.png')} style={styles.logo} />
      <Text style={[styles.title, { color: theme.colors.text }]}>Login</Text>
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.registerText, { color: theme.colors.primary }]}>
          Não tem uma conta? Registre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  registerText: {
    marginTop: 20,
  },
});

export default LoginScreen;