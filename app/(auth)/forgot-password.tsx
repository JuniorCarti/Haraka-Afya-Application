import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Heart, Mail } from 'lucide-react-native';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        'Success',
        'Password reset link has been sent to your email',
        [{ text: 'OK', onPress: () => router.push('/login') }]
      );
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Heart size={40} color="#4A90E2" />
        <Text style={styles.appName}>Haraka Afya</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg' }}
          style={styles.heroImage}
        />
        
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>
          Enter your email address and we'll send you instructions to reset your password
        </Text>
        
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Mail size={20} color="#6E7191" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!isLoading}
            />
          </View>
          
          <TouchableOpacity 
            style={[styles.resetButton, isLoading && styles.resetButtonDisabled]}
            onPress={handleResetPassword}
            disabled={isLoading}
          >
            <Text style={styles.resetButtonText}>
              {isLoading ? 'Sending...' : 'Reset Password'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 1,
  },
  appName: {
    fontFamily: 'Manrope-Bold',
    fontSize: 28,
    color: '#1A1A1A',
    marginTop: 12,
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
    marginVertical: 32,
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
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 24,
  },
  inputIcon: {
    marginLeft: 16,
  },
  input: {
    flex: 1,
    padding: 16,
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  resetButtonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  resetButtonText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});