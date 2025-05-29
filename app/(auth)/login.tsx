import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart } from 'lucide-react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/(tabs)');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Heart size={40} color="#4A90E2" />
          <Text style={styles.appName}>Haraka Afya</Text>
          <Text style={styles.appDescription}>
            Your trusted healthcare companion for quick symptom checks and medical guidance
          </Text>
        </View>

        <View style={styles.content}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.heroImage}
          />
          
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to access your health dashboard</Text>
          
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!isLoading}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              editable={!isLoading}
            />
            
            <TouchableOpacity 
              style={styles.forgotPassword}
              onPress={() => router.push('/forgot-password')}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text style={styles.loginButtonText}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.registerContainer}
            onPress={() => router.push('/register')}
          >
            <Text style={styles.registerText}>
              Don't have an account? <Text style={styles.registerLink}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  appName: {
    fontFamily: 'Manrope-Bold',
    fontSize: 28,
    color: '#1A1A1A',
    marginTop: 12,
  },
  appDescription: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: '#6E7191',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Manrope-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: '#6E7191',
    marginBottom: 32,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#4A90E2',
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  loginButtonText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  registerContainer: {
    marginTop: 24,
    paddingVertical: 16,
  },
  registerText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
  },
  registerLink: {
    fontFamily: 'Manrope-Bold',
    color: '#4A90E2',
  },
});