import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useTheme } from '../../contexts/ThemeContext'
import { fetchStudent } from '../../data/students'

const Field = ({ label, value, theme }) => (
  <View style={styles.field}>
    <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
    <Text style={[styles.value, { color: theme.title }]}>{value}</Text>
  </View>
)

export default function StudentDetails() {
  const { id } = useLocalSearchParams()
  const { theme } = useTheme()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    fetchStudent(id)
      .then((s) => active && setStudent(s))
      .catch((e) => active && setError(e.message))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, [id])

  if (loading) {
    return <View style={styles.center}><ActivityIndicator size="large" color={theme.link} /></View>
  }
  if (error || !student) {
    return (
      <View style={styles.center}>
        <Text style={{ color: '#cc475a' }}>{error ?? 'Student not found.'}</Text>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={[styles.card, { backgroundColor: theme.uiBackground }]}>
        <Field label="Name" value={student.name} theme={theme} />
        <Field label="Registration No." value={student.regNo} theme={theme} />
        <Field label="Age" value={student.age} theme={theme} />
        <Field label="City" value={student.city} theme={theme} />
      </View>

      <Text style={[styles.section, { color: theme.title }]}>Course Information</Text>
      <View style={[styles.card, { backgroundColor: theme.uiBackground }]}>
        {student.courses.length === 0 ? (
          <Text style={{ color: theme.text }}>No courses enrolled.</Text>
        ) : (
          student.courses.map((c) => (
            <Text key={c} style={[styles.course, { color: theme.title }]}>• {c}</Text>
          ))
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  content: { padding: 16 },
  card: { borderRadius: 8, padding: 16, marginBottom: 16 },
  field: { marginBottom: 12 },
  label: { fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.5 },
  value: { fontSize: 18, fontWeight: '500' },
  section: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  course: { fontSize: 16, marginVertical: 3 },
})
