import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import Button from './Button';
import { getMedicalNotes, addMedicalNote } from '../services/api';

const MedicalNotes = ({ patientId }) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    fetchMedicalNotes();
  }, []);

  const fetchMedicalNotes = async () => {
    try {
      const data = await getMedicalNotes(patientId);
      setNotes(data);
    } catch (error) {
      console.error('Error fetching medical notes:', error);
    }
  };

  const handleAddNote = async () => {
    if (newNote.trim() === '') return;

    try {
      const addedNote = await addMedicalNote(patientId, newNote);
      setNotes([addedNote, ...notes]);
      setNewNote('');
    } catch (error) {
      console.error('Error adding medical note:', error);
    }
  };

  const renderNoteItem = ({ item }) => (
    <View style={[styles.noteItem, { backgroundColor: theme.colors.card }]}>
      <Text style={[styles.noteText, { color: theme.colors.text }]}>{item.content}</Text>
      <Text style={[styles.noteDate, { color: theme.colors.text }]}>{new Date(item.createdAt).toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Notas Médicas</Text>
      <View style={styles.addNoteContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: theme.colors.card, color: theme.colors.text }]}
          placeholder="Adicionar nova nota"
          placeholderTextColor={theme.colors.text}
          value={newNote}
          onChangeText={setNewNote}
          multiline
        />
        <Button title="Adicionar" onPress={handleAddNote} />
      </View>
      <FlatList
        data={notes}
        renderItem={renderNoteItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addNoteContainer: {
    marginBottom: 15,
  },
  input: {
    height: 80,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  noteItem: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
  },
  noteDate: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default MedicalNotes;