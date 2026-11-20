import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useRouter } from 'expo-router'
import { useTheme } from '../../contexts/ThemeContext'
import { fetchStudents } from '../../data/students'

export default function StudentList() {
  const { theme } = useTheme()
  const router = useRouter()

  const [students, setStudents] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      setStudents(await fetchStudents())
    } catch (e) {
      setError(e.name === 'AbortError' ? 'The request timed out.' : e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // Empty dependency array: load once (the old version re-fetched on every render)
  useEffect(() => { load() }, [load])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.regNo.toLowerCase().includes(q)
    )
  }, [students, search])

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.link} />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={[styles.error]}>Could not load students: {error}</Text>
        <Pressable onPress={load} style={[styles.button, { backgroundColor: theme.link }]}>
          <Text style={styles.buttonText}>Retry</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: theme.title, borderColor: theme.iconColor, backgroundColor: theme.uiBackground }]}
        placeholder="Search by name, city or reg. no."
        placeholderTextColor={theme.iconColor}
        value={search}
        onChangeText={setSearch}
        autoCorrect={false}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/students/${item.id}`)}
            style={({ pressed }) => [styles.item, { backgroundColor: theme.uiBackground, opacity: pressed ? 0.7 : 1 }]}
          >
            <Text style={[styles.name, { color: theme.title }]}>{item.name}</Text>
            <Text style={{ color: theme.text }}>{item.regNo} · {item.city}</Text>
          </Pressable>
        )}
        ListEmptyComponent={<Text style={[styles.empty, { color: theme.text }]}>No students found.</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 16 },
  item: { padding: 16, borderRadius: 8, marginBottom: 10 },
  name: { fontSize: 16, fontWeight: '600', marginBottom: 2 },
  empty: { textAlign: 'center', marginTop: 24 },
  error: { color: '#cc475a', textAlign: 'center', marginBottom: 12 },
  button: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: '600' },
})
