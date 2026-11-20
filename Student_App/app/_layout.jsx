import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import LightLogo from '../assets/img/light.png'
import DarkLogo from '../assets/img/dark.png'
import { ThemeProvider, useTheme } from '../contexts/ThemeContext'

const icon = (name) => ({ color, size }) => <Ionicons name={name} size={size} color={color} />

const LayoutContent = () => {
  const { scheme, theme, toggleTheme } = useTheme()

  return (
    <>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <View style={styles.container}>
        <Tabs
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
            // Pressable is preferred over Button: it can wrap any content (icons, images).
            headerRight: () => (
              <Pressable
                onPress={toggleTheme}
                hitSlop={10}
                style={styles.toggle}
                accessibilityRole="button"
                accessibilityLabel="Toggle dark mode"
              >
                <Image source={scheme === 'dark' ? LightLogo : DarkLogo} style={styles.toggleIcon} />
              </Pressable>
            ),
            tabBarStyle: { backgroundColor: theme.navBackground },
            tabBarActiveTintColor: theme.title,
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: icon('home') }} />
          {/* The students folder has its own Stack header, so hide the tab header */}
          <Tabs.Screen name="students" options={{ title: 'Students', headerShown: false, tabBarIcon: icon('people') }} />
          <Tabs.Screen name="flatlist" options={{ title: 'FlatList', tabBarIcon: icon('list') }} />
          <Tabs.Screen name="scrollview" options={{ title: 'ScrollView', tabBarIcon: icon('layers') }} />
          <Tabs.Screen name="about" options={{ title: 'About', tabBarIcon: icon('information-circle') }} />
          <Tabs.Screen name="contact" options={{ title: 'Contact', tabBarIcon: icon('call') }} />
        </Tabs>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Student App. All Rights Reserved.</Text>
        </View>
      </View>
    </>
  )
}

const RootLayout = () => (
  <ThemeProvider>
    <LayoutContent />
  </ThemeProvider>
)

export default RootLayout

const styles = StyleSheet.create({
  container: { flex: 1 },
  toggle: { marginRight: 16 },
  toggleIcon: { width: 28, height: 28, resizeMode: 'contain' },
  footer: {
    backgroundColor: '#2c3e50',
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#34495e',
  },
  footerText: { color: '#ffffff', fontSize: 12, fontWeight: '500' },
})
