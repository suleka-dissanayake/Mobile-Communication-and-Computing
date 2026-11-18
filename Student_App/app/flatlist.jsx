
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

const FlatListDemo = () => {

  const [text, setText] = useState('')

  const students = [
    { id: '1', name: 'Kamal', city: 'Kandy' },
    { id: '2', name: 'Nimal', city: 'Colombo'},
    { id: '3', name: 'Sunil', city: 'Gampaha' },
    { id: '4', name: 'Amal', city: 'Vavuniya' },
    { id: '5', name: 'Saman', city: 'Jaffna' },
    { id: '6', name: 'Nuwan', city: 'Colombo' },
    { id: '7', name: 'Kasun', city: 'Kaluthara' },
    { id: '8', name: 'Ruwan', city: 'Mannar' },
    { id: '9', name: 'Dinesh', city: 'Anuradhapura' },
    { id: '10', name: 'Chamara', city: 'Matale' },
  ]

  const filteredStudents = students.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  )

  const filterByCity = students.filter((item) => 
    item.city.toLowerCase().includes(text.toLowerCase())
  )

  const filterById = students.filter((item) => 
    item.id.toLowerCase().includes(text.toLowerCase())
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