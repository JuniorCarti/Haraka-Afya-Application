import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Clock, CircleAlert as AlertCircle, Bookmark } from 'lucide-react-native';

interface CheckHistoryItem {
  id: string;
  date: string;
  symptoms: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

const checkHistory: CheckHistoryItem[] = [
  {
    id: '1',
    date: 'Oct 15, 2023',
    symptoms: ['Persistent cough', 'Shortness of breath'],
    riskLevel: 'medium',
  },
  {
    id: '2',
    date: 'Oct 10, 2023',
    symptoms: ['Lump in breast'],
    riskLevel: 'high',
  },
  {
    id: '3',
    date: 'Oct 2, 2023',
    symptoms: ['Unexplained weight loss', 'Persistent fatigue'],
    riskLevel: 'low',
  },
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'low':
      return '#2ECC71';
    case 'medium':
      return '#FFA000';
    case 'high':
      return '#E53935';
    default:
      return '#6E7191';
  }
};

export function RecentChecks() {
  return (
    <View style={styles.container}>
      {checkHistory.map((item) => (
        <TouchableOpacity key={item.id} style={styles.checkItem}>
          <View style={styles.checkHeader}>
            <View style={styles.dateContainer}>
              <Clock size={14} color="#6E7191" />
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <View style={[styles.riskIndicator, { backgroundColor: `${getRiskColor(item.riskLevel)}20` }]}>
              <AlertCircle size={12} color={getRiskColor(item.riskLevel)} />
              <Text style={[styles.riskText, { color: getRiskColor(item.riskLevel) }]}>
                {item.riskLevel.charAt(0).toUpperCase() + item.riskLevel.slice(1)} Risk
              </Text>
            </View>
          </View>
          
          <View style={styles.symptomsContainer}>
            {item.symptoms.map((symptom, index) => (
              <Text key={index} style={styles.symptomText}>• {symptom}</Text>
            ))}
          </View>
          
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}>
              <Bookmark size={16} color="#4A90E2" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  checkItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  checkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#6E7191',
    marginLeft: 4,
  },
  riskIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  riskText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    marginLeft: 4,
  },
  symptomsContainer: {
    marginBottom: 16,
  },
  symptomText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#F0F4F8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  actionButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#4A90E2',
  },
  saveButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F4F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});