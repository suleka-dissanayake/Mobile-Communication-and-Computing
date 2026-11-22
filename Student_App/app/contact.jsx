import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useTheme } from '../contexts/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.title }]}>Contact Page</Text>
      <Link href="/" style={[styles.link, { color: theme.link, borderBottomColor: theme.link }]}>Back Home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontWeight: 'bold', fontSize: 18 },
  link: { marginVertical: 10, borderBottomWidth: 1 },
})
