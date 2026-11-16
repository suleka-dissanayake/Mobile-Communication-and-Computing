
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const students = [
    { id: 1, name: 'Suleka', reg: '2022/ICT/001' },
    { id: 2, name: 'Arun', reg: '2022/ICT/002' },
    { id: 3, name: 'Nethsara', reg: '2022/ICT/003' },
  ];

  const [text, setText] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    const trimmed = text.trim();

    if (trimmed === '') {
      return;
    }

    setEntries([
      ...entries,
      {
        id: Date.now().toString(),
        name: trimmed,
      },
    ]);

    setText('');
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.text}>
        University of Vavuniya
      </Text>

      {/* Student List using FlatList */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.reg}>{item.reg}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
        blurOnSubmit={false}
      />

      {/* Add Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Add Name</Text>
      </TouchableOpacity>

      {/* New Entries using FlatList */}
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <Text style={styles.entry}>
            {index + 1}. {item.name}
          </Text>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'blue',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },

  row: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    width: 250,
    borderRadius: 8,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  reg: {
    fontSize: 14,
    color: 'gray',
  },

  input: {
    backgroundColor: 'white',
    width: 250,
    height: 45,
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },

  button: {
    backgroundColor: 'orange',
    width: 250,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  entry: {
    backgroundColor: 'white',
    width: 250,
    padding: 10,
    marginVertical: 3,
    borderRadius: 8,
    fontSize: 16,
  },
});