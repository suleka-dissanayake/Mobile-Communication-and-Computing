import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link } from 'expo-router'
import { useTheme } from '../contexts/ThemeContext'
import { fetchStudents } from '../data/students'

// Simple FlatList demo using the shared sample data
const FlatListDemo = () => {
  const { theme } = useTheme()
  const [text, setText] = useState('')
  const [students, setStudents] = useState([])

  React.useEffect(() => {
    fetchStudents().then(setStudents).catch(() => setStudents([]))
  }, [])

  // One combined filter: matches name, city or id
  const filtered = useMemo(() => {
    const q = text.trim().toLowerCase()
    return students.filter(
      (s) => s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q) || s.id.includes(q)
    )
  }, [students, text])

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.title }]}>Student Search</Text>

      <TextInput
        style={[styles.input, { color: theme.title, borderColor: theme.iconColor, backgroundColor: theme.uiBackground }]}
        placeholder="Search by name, city or ID"
        placeholderTextColor={theme.iconColor}
        value={text}
        onChangeText={setText}
        autoCorrect={false}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.row, { backgroundColor: theme.uiBackground }]}>
            <Text style={[styles.name, { color: theme.title }]}>{item.name}</Text>
            <Text style={{ color: theme.text }}>{item.city}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No students found!</Text>}
        keyboardShouldPersistTaps="handled"
      />

      <Link href="/" style={[styles.link, { color: theme.link, borderBottomColor: theme.link }]}>Back Home</Link>
    </View>
  )
}

export default FlatListDemo

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontWeight: 'bold', fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 20, fontSize: 16 },
  row: { padding: 20, marginBottom: 10, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: '500' },
  empty: { textAlign: 'center', marginTop: 20, color: '#cc475a', fontSize: 16 },
  link: { marginVertical: 10, borderBottomWidth: 1, alignSelf: 'flex-start' },
})
