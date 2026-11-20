import React from 'react'
import { Stack } from 'expo-router'
import { useTheme } from '../../contexts/ThemeContext'

export default function StudentsLayout() {
  const { theme } = useTheme()
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        contentStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Student List' }} />
      <Stack.Screen name="[id]" options={{ title: 'Student Details' }} />
    </Stack>
  )
}
