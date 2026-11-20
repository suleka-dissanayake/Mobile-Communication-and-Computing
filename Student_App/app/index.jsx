import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Logo from '../assets/img/image.jpg'
import { useTheme } from '../contexts/ThemeContext'

const Home = () => {
  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={Logo} style={styles.logo} />

      <Text style={[styles.title, { color: theme.title }]}>Student App</Text>
      <Text style={[styles.subtitle, { color: theme.text }]}>Manage and browse student records</Text>

      <View style={[styles.card, { backgroundColor: theme.uiBackground }]}>
        <Text style={{ color: theme.text }}>Hello, this is a card</Text>
      </View>

      <Link href="/students" style={[styles.link, { color: theme.link, borderBottomColor: theme.link }]}>Student List</Link>
      <Link href="/flatlist" style={[styles.link, { color: theme.link, borderBottomColor: theme.link }]}>FlatList Demo</Link>
      <Link href="/scrollview" style={[styles.link, { color: theme.link, borderBottomColor: theme.link }]}>ScrollView Demo</Link>
      <Link href="/about" style={[styles.link, { color: theme.link, borderBottomColor: theme.link }]}>About Page</Link>
      <Link href="/contact" style={[styles.link, { color: theme.link, borderBottomColor: theme.link }]}>Contact Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontWeight: 'bold', fontSize: 22, marginTop: 12 },
  subtitle: { marginVertical: 12 },
  card: {
    padding: 20,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: { width: 100, height: 100, resizeMode: 'contain' },
  link: { marginVertical: 8, borderBottomWidth: 1 },
})
