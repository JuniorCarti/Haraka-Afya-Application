import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { CancerTypes } from '@/components/home/CancerTypes';
import { RecentUpdates } from '@/components/home/RecentUpdates';
import { QuickAssessment } from '@/components/home/QuickAssessment';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [userName, setUserName] = useState('Sarah');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, {userName}</Text>
            <Text style={styles.subGreeting}>How are you feeling today?</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        
        <QuickAssessment />
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Common Cancer Types</Text>
          <Text style={styles.sectionSubtitle}>Learn about different types of cancer</Text>
          <CancerTypes />
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Educational Resources</Text>
          <Text style={styles.sectionSubtitle}>Latest updates and information</Text>
          <RecentUpdates />
        </View>

        <View style={styles.supportSection}>
          <Text style={styles.supportTitle}>Need to talk to someone?</Text>
          <TouchableOpacity style={styles.supportButton}>
            <Text style={styles.supportButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Always consult a healthcare professional for medical advice.
          </Text>
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
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  greeting: {
    fontFamily: 'Manrope-Bold',
    fontSize: 24,
    color: '#1A1A1A',
  },
  subGreeting: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: '#6E7191',
    marginTop: 4,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#1A1A1A',
  },
  sectionSubtitle: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    marginTop: 4,
    marginBottom: 16,
  },
  supportSection: {
    marginTop: 32,
    marginHorizontal: 20,
    backgroundColor: '#E6F0FF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  supportTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 12,
  },
  supportButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  supportButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  footer: {
    marginTop: 32,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  footerText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: '#6E7191',
    textAlign: 'center',
  },
});