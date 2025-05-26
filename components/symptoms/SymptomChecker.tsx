import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

interface SymptomType {
  id: string;
  name: string;
  type: 'breast' | 'lung' | 'skin' | 'digestive' | 'other';
  severity: 'low' | 'medium' | 'high';
}

const symptoms: SymptomType[] = [
  { id: '1', name: 'Lump in breast', type: 'breast', severity: 'high' },
  { id: '2', name: 'Nipple discharge', type: 'breast', severity: 'medium' },
  { id: '3', name: 'Persistent cough', type: 'lung', severity: 'medium' },
  { id: '4', name: 'Shortness of breath', type: 'lung', severity: 'high' },
  { id: '5', name: 'Unusual mole changes', type: 'skin', severity: 'high' },
  { id: '6', name: 'Abnormal bleeding', type: 'other', severity: 'high' },
  { id: '7', name: 'Unexplained weight loss', type: 'other', severity: 'medium' },
  { id: '8', name: 'Persistent fatigue', type: 'other', severity: 'low' },
  { id: '9', name: 'Changes in bowel habits', type: 'digestive', severity: 'medium' },
  { id: '10', name: 'Difficulty swallowing', type: 'digestive', severity: 'medium' },
];

export function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  
  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(id) 
        ? prev.filter(s => s !== id) 
        : [...prev, id]
    );
  };

  const handleCheck = () => {
    const selected = symptoms.filter(s => selectedSymptoms.includes(s.id));
    const highSeverity = selected.filter(s => s.severity === 'high');
    
    if (highSeverity.length > 0) {
      if (Platform.OS === 'web') {
        const shouldCall = window.confirm(
          'WARNING: Your symptoms indicate a potentially serious condition. Would you like to call emergency services?'
        );
        if (shouldCall) {
          window.location.href = 'tel:911';
        }
      } else {
        Alert.alert(
          'Warning',
          'Your symptoms indicate a potentially serious condition. Would you like to call emergency services?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Call Now', onPress: () => Linking.openURL('tel:911') }
          ]
        );
      }
    } else {
      Alert.alert(
        'Assessment Result',
        'Based on your symptoms, we recommend consulting with a healthcare provider for a proper evaluation. Would you like to see nearby hospitals?',
        [
          { text: 'Not Now', style: 'cancel' },
          { text: 'Show Hospitals', onPress: () => router.push('/hospitals') }
        ]
      );
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your symptoms</Text>
      <Text style={styles.subtitle}>
        Choose all symptoms you've been experiencing recently
      </Text>
      
      <View style={styles.symptomsContainer}>
        {symptoms.map((symptom) => (
          <TouchableOpacity
            key={symptom.id}
            style={[
              styles.symptomButton,
              selectedSymptoms.includes(symptom.id) && styles.symptomButtonSelected,
              symptom.severity === 'high' && styles.highSeverity
            ]}
            onPress={() => toggleSymptom(symptom.id)}
          >
            <Text
              style={[
                styles.symptomText,
                selectedSymptoms.includes(symptom.id) && styles.symptomTextSelected
              ]}
            >
              {symptom.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity
        style={[
          styles.checkButton,
          selectedSymptoms.length === 0 && styles.checkButtonDisabled
        ]}
        disabled={selectedSymptoms.length === 0}
        onPress={handleCheck}
      >
        <Text style={styles.checkButtonText}>Check Symptoms</Text>
        <ArrowRight size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    marginBottom: 20,
  },
  symptomsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  symptomButton: {
    backgroundColor: '#F0F4F8',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  symptomButtonSelected: {
    backgroundColor: '#4A90E2',
  },
  highSeverity: {
    borderWidth: 1,
    borderColor: '#E53935',
  },
  symptomText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#4E4B66',
  },
  symptomTextSelected: {
    color: '#FFFFFF',
  },
  checkButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButtonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  checkButtonText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 8,
  },
});