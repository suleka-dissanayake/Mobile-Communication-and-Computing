import React from 'react';
import { Pressable } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

const LayoutContent = () => {
  const { scheme, theme, toggleTheme } = useTheme();

  return (
    <>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.header },
          headerTintColor: theme.text,
          contentStyle: { backgroundColor: theme.background },
          headerRight: () => (
            <Pressable onPress={toggleTheme} hitSlop={10} accessibilityLabel="Toggle theme">
              <Ionicons
                name={scheme === 'dark' ? 'sunny' : 'moon'}
                size={24}
                color={theme.text}
              />
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact' }} />
      </Stack>
    </>
  );
};

const RootLayout = () => (
  <ThemeProvider>
    <LayoutContent />
  </ThemeProvider>
);

export default RootLayout;
