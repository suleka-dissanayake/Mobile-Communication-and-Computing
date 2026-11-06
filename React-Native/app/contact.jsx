import {
  StyleSheet, Text, View, TextInput, Pressable, Alert,
  KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { useTheme } from '../contexts/ThemeContext';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!EMAIL_RE.test(form.email.trim())) e.email = 'Enter a valid email';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    Alert.alert('Message sent', `Thanks ${form.name.trim()}, we'll reply soon.`, [
      {
        text: 'OK',
        onPress: () => {
          setForm({ name: '', email: '', message: '' });
          router.back();
        },
      },
    ]);
  };

  const field = (key, label, extra = {}) => (
    <View style={styles.field}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <TextInput
        value={form[key]}
        onChangeText={(v) => update(key, v)}
        placeholderTextColor={theme.subtext}
        style={[
          styles.input,
          {
            backgroundColor: theme.inputBg,
            color: theme.text,
            borderColor: errors[key] ? '#d93025' : theme.border,
          },
          extra.multiline && styles.multiline,
        ]}
        {...extra}
      />
      {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={[styles.title, { color: theme.text }]}>Contact Us</Text>
        {field('name', 'Name', { placeholder: 'Your name' })}
        {field('email', 'Email', {
          placeholder: 'you@example.com',
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        })}
        {field('message', 'Message', {
          placeholder: 'How can we help?',
          multiline: true,
          numberOfLines: 5,
          textAlignVertical: 'top',
        })}
        <Pressable style={[styles.btn, { backgroundColor: theme.primary }]} onPress={submit}>
          <Text style={styles.btnText}>Send</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: { padding: 16, gap: 14 },
  title: { fontSize: 24, fontWeight: 'bold' },
  field: { gap: 6 },
  label: { fontWeight: '600' },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, fontSize: 15 },
  multiline: { minHeight: 110 },
  error: { color: '#d93025', fontSize: 13 },
  btn: { padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 6 },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
