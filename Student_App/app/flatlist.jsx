
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

const FlatListDemo = () => {

  const [text, setText] = useState('')

  const students = [
    { id: '1', name: 'Kamal' },
    { id: '2', name: 'Nimal' },
    { id: '3', name: 'Sunil' },
    { id: '4', name: 'Amal' },
    { id: '5', name: 'Saman' },
    { id: '6', name: 'Nuwan' },
    { id: '7', name: 'Kasun' },
    { id: '8', name: 'Ruwan' },
    { id: '9', name: 'Dinesh' },
    { id: '10', name: 'Chamara' },
  ]

  const filteredStudents = students.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Search</Text>

      <TextInput
        style={styles.input}
        placeholder="Type here to search"
        value={text}
        onChangeText={setText}
      />

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No students found!
          </Text>
        }
      />

      <Link href="/" style={styles.link}>
        Back Home
      </Link>

    </View>
  )
}

export default FlatListDemo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },

  row: {
    backgroundColor: '#eee',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },

  name: {
    fontSize: 16,
    fontWeight: '500',
  },

  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
    fontSize: 16,
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    color: 'blue',
  },
})