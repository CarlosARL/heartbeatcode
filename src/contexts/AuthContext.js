import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, register, logout } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data
    AsyncStorage.getItem('user').then(storedUser => {
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    });
  }, []);

  const signIn = async (nameOrEmail, password) => {
    try {
      const userData = await login(nameOrEmail, password);
      if (userData === "logado") {
        const user = { name: nameOrEmail }; // Assumindo que o nome ou email foi usado para login
        setUser(user);
        AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        throw new Error(userData);
      }
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (name, email, password, passwordConfirmation) => {
    try {
      const result = await register(name, email, password, passwordConfirmation);
      if (result === "Registrado com sucesso!") {
        const user = { name, email };
        setUser(user);
        AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        throw new Error(result);
      }
    } catch (error) {
      throw error;
    }
  };


  const signOut = async () => {
    try {
      await logout();
      setUser(null);
      AsyncStorage.removeItem('user');
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};