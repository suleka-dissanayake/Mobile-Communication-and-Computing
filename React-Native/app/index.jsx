import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import Logo from '../assets/favicon.png';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { theme } = useTheme();
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image style={styles.img} source={Logo} />
      <Text style={[styles.title, { color: theme.text }]}>Reading HomePage</Text>
      <Text style={[styles.subtitle, { color: theme.primary }]}>Initial Page</Text>

      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={{ color: theme.text }}>Books added to shelf: {count}</Text>
        <View style={styles.row}>
          <Pressable
            style={[styles.btn, { backgroundColor: theme.primary }]}
            onPress={() => setCount((c) => c + 1)}
          >
            <Text style={styles.btnText}>+ Add</Text>
          </Pressable>
          <Pressable
            style={[styles.btn, { backgroundColor: theme.border }]}
            onPress={() => setCount((c) => Math.max(0, c - 1))}
          >
            <Text style={[styles.btnText, { color: theme.text }]}>- Remove</Text>
          </Pressable>
        </View>
      </View>

      <Link style={[styles.link, { color: theme.text }]} href="/about">About Page</Link>
      <Link style={[styles.link, { color: theme.text }]} href="/contact">Contact Page</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontWeight: 'bold', fontSize: 20 },
  subtitle: { marginVertical: 20 },
  card: { padding: 16, borderRadius: 10, borderWidth: 1, alignItems: 'center', gap: 12 },
  row: { flexDirection: 'row', gap: 10 },
  btn: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: '600' },
  img: { width: 100, height: 100, resizeMode: 'contain' },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
});
