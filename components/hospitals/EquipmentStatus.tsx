import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CircleAlert as AlertCircle, CircleCheck as CheckCircle2, Clock } from 'lucide-react-native';

interface Equipment {
  id: string;
  name: string;
  status: 'operational' | 'maintenance' | 'offline';
  hospital: string;
  maintenanceInfo?: {
    startDate: string;
    estimatedCompletion: string;
    alternativeLocations: string[];
  };
}

const equipmentList: Equipment[] = [
  {
    id: '1',
    name: 'Linear Accelerator',
    status: 'operational',
    hospital: 'Nairobi Hospital',
  },
  {
    id: '2',
    name: 'MRI Scanner',
    status: 'maintenance',
    hospital: 'Aga Khan University Hospital',
    maintenanceInfo: {
      startDate: '2024-02-15',
      estimatedCompletion: '2024-02-20',
      alternativeLocations: ['Kenyatta National Hospital', 'MP Shah Hospital'],
    },
  },
  {
    id: '3',
    name: 'CT Scanner',
    status: 'operational',
    hospital: 'Kenyatta National Hospital',
  },
  {
    id: '4',
    name: 'PET Scanner',
    status: 'offline',
    hospital: 'MP Shah Hospital',
    maintenanceInfo: {
      startDate: '2024-02-10',
      estimatedCompletion: '2024-03-01',
      alternativeLocations: ['Aga Khan University Hospital'],
    },
  },
];

export function EquipmentStatus() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return '#2ECC71';
      case 'maintenance':
        return '#F1C40F';
      case 'offline':
        return '#E74C3C';
      default:
        return '#95A5A6';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle2 size={20} color="#2ECC71" />;
      case 'maintenance':
        return <Clock size={20} color="#F1C40F" />;
      case 'offline':
        return <AlertCircle size={20} color="#E74C3C" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipment Status</Text>
      
      <ScrollView style={styles.equipmentList}>
        {equipmentList.map((equipment) => (
          <View key={equipment.id} style={styles.equipmentCard}>
            <View style={styles.equipmentHeader}>
              <View style={styles.nameContainer}>
                {getStatusIcon(equipment.status)}
                <Text style={styles.equipmentName}>{equipment.name}</Text>
              </View>
              <View style={[
                styles.statusBadge,
                { backgroundColor: `${getStatusColor(equipment.status)}20` }
              ]}>
                <Text style={[
                  styles.statusText,
                  { color: getStatusColor(equipment.status) }
                ]}>
                  {equipment.status.charAt(0).toUpperCase() + equipment.status.slice(1)}
                </Text>
              </View>
            </View>
            
            <Text style={styles.hospitalName}>{equipment.hospital}</Text>
            
            {equipment.maintenanceInfo && (
              <View style={styles.maintenanceInfo}>
                <Text style={styles.maintenanceTitle}>Maintenance Information:</Text>
                <Text style={styles.maintenanceText}>
                  Started: {equipment.maintenanceInfo.startDate}
                </Text>
                <Text style={styles.maintenanceText}>
                  Expected Completion: {equipment.maintenanceInfo.estimatedCompletion}
                </Text>
                
                <Text style={styles.alternativesTitle}>Alternative Locations:</Text>
                {equipment.maintenanceInfo.alternativeLocations.map((location, index) => (
                  <TouchableOpacity 
                    key={index}
                    style={styles.alternativeButton}
                  >
                    <Text style={styles.alternativeButtonText}>{location}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontFamily: 'Manrope-Bold',
    fontSize: 20,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  equipmentList: {
    maxHeight: 400,
  },
  equipmentCard: {
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
  equipmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  equipmentName: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#1A1A1A',
    marginLeft: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
  },
  hospitalName: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    marginBottom: 12,
  },
  maintenanceInfo: {
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  maintenanceTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  maintenanceText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    marginBottom: 4,
  },
  alternativesTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    color: '#1A1A1A',
    marginTop: 12,
    marginBottom: 8,
  },
  alternativeButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  alternativeButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});