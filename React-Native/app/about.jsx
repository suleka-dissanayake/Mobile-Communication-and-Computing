import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

const FEATURES = [
  { id: '1', title: 'Track your reading', body: 'Keep a list of books you are reading, finished, or planning to read.' },
  { id: '2', title: 'Light & dark themes', body: 'Switch themes any time using the icon in the header.' },
  { id: '3', title: 'Simple navigation', body: 'Move between Home, About and Contact with Expo Router.' },
];

const About = () => {
  const { theme } = useTheme();
  const [openId, setOpenId] = useState(null);

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.title, { color: theme.text }]}>About Shelfie</Text>
      <Text style={[styles.intro, { color: theme.subtext }]}>
        Shelfie is a small reading-tracker app built with React Native and Expo.
        Tap a feature below to learn more.
      </Text>

      {FEATURES.map((f) => {
        const open = openId === f.id;
        return (
          <Pressable
            key={f.id}
            onPress={() => setOpenId(open ? null : f.id)}
            style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}
          >
            <View style={styles.cardHeader}>
              <Text style={[styles.cardTitle, { color: theme.text }]}>{f.title}</Text>
              <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={20} color={theme.text} />
            </View>
            {open && <Text style={[styles.cardBody, { color: theme.subtext }]}>{f.body}</Text>}
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  title: { fontSize: 24, fontWeight: 'bold' },
  intro: { fontSize: 15, lineHeight: 22, marginBottom: 8 },
  card: { padding: 14, borderRadius: 10, borderWidth: 1 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 16, fontWeight: '600' },
  cardBody: { marginTop: 8, lineHeight: 20 },
});
