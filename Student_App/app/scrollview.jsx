import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useTheme } from '../contexts/ThemeContext'

const BOXES = [
  { label: 'Box 1', color: 'tomato' },
  { label: 'Box 2', color: 'orange' },
  { label: 'Box 3', color: 'gold' },
  { label: 'Box 4', color: 'lightgreen' },
  { label: 'Box 5', color: 'skyblue' },
  { label: 'Box 6', color: 'violet' },
]

const ScrollViewDemo = () => {
  const { theme } = useTheme()

  return (
    // ScrollView lets the screen scroll when content is taller than the screen
    <ScrollView style={{ backgroundColor: theme.background }} contentContainerStyle={styles.content}>
      <Text style={[styles.title, { color: theme.title }]}>ScrollView Demo</Text>

      {BOXES.map((b) => (
        <View key={b.label} style={[styles.box, { backgroundColor: b.color }]}>
          <Text>{b.label}</Text>
        </View>
      ))}

      <Link href="/" style={[styles.link, { color: theme.link, borderBottomColor: theme.link }]}>Back Home</Link>
    </ScrollView>
  )
}

export default ScrollViewDemo

const styles = StyleSheet.create({
  content: { alignItems: 'center', padding: 20 },
  title: { fontWeight: 'bold', fontSize: 20, marginBottom: 20 },
  box: { width: '100%', height: 150, marginBottom: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 8 },
  link: { marginVertical: 10, borderBottomWidth: 1 },
})
