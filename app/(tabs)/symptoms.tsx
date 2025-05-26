import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymptomChecker } from '@/components/symptoms/SymptomChecker';
import { RecentChecks } from '@/components/symptoms/RecentChecks';
import { ChevronRight } from 'lucide-react-native';

export default function SymptomsScreen() {
  const [showHistory, setShowHistory] = useState(false);
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Symptom Checker</Text>
        <Text style={styles.subtitle}>Assess your symptoms and get guidance</Text>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerTitle}>Important Disclaimer</Text>
          <Text style={styles.disclaimerText}>
            This tool does not provide medical advice. It is intended for informational purposes only and not a substitute for professional medical consultation.
          </Text>
        </View>
        
        <View style={styles.checkerSection}>
          <SymptomChecker />
        </View>
        
        {showHistory ? (
          <View style={styles.historySection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Checks</Text>
              <TouchableOpacity onPress={() => setShowHistory(false)}>
                <Text style={styles.hideText}>Hide</Text>
              </TouchableOpacity>
            </View>
            <RecentChecks />
          </View>
        ) : (
          <TouchableOpacity 
            style={styles.showHistoryButton} 
            onPress={() => setShowHistory(true)}
          >
            <Text style={styles.showHistoryText}>View Recent Checks</Text>
            <ChevronRight size={20} color="#4A90E2" />
          </TouchableOpacity>
        )}
        
        <View style={styles.emergencySection}>
          <Text style={styles.emergencyTitle}>Emergency Symptoms</Text>
          <Text style={styles.emergencyText}>
            If you experience any of these symptoms, please seek immediate medical attention:
          </Text>
          <View style={styles.emergencyList}>
            <Text style={styles.emergencyItem}>• Severe chest pain or pressure</Text>
            <Text style={styles.emergencyItem}>• Difficulty breathing</Text>
            <Text style={styles.emergencyItem}>• Sudden severe headache</Text>
            <Text style={styles.emergencyItem}>• Sudden numbness or weakness in face, arm, or leg</Text>
            <Text style={styles.emergencyItem}>• Severe abdominal pain</Text>
          </View>
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.emergencyButtonText}>Call Emergency Services</Text>
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontFamily: 'Manrope-Bold',
    fontSize: 24,
    color: '#1A1A1A',
  },
  subtitle: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: '#6E7191',
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  disclaimerBox: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#FFF4E5',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FFA000',
  },
  disclaimerTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  disclaimerText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#4E4B66',
    lineHeight: 20,
  },
  checkerSection: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  historySection: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#1A1A1A',
  },
  hideText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#4A90E2',
  },
  showHistoryButton: {
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: '#F0F4F8',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showHistoryText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: '#4A90E2',
  },
  emergencySection: {
    marginHorizontal: 20,
    marginBottom: 32,
    padding: 20,
    backgroundColor: '#FFE8EC',
    borderRadius: 12,
  },
  emergencyTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#E53935',
    marginBottom: 8,
  },
  emergencyText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#4E4B66',
    lineHeight: 20,
    marginBottom: 12,
  },
  emergencyList: {
    marginBottom: 16,
  },
  emergencyItem: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#4E4B66',
    lineHeight: 22,
  },
  emergencyButton: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  emergencyButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
});