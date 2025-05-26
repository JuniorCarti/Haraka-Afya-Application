import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Search, FileSliders as Sliders } from 'lucide-react-native';
import { HospitalList } from '@/components/hospitals/HospitalList';
import { SearchInput } from '@/components/common/SearchInput';
import { Platform } from 'react-native';

export default function HospitalsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLocation, setCurrentLocation] = useState('New York, NY');
  
  const handleLocationPermission = () => {
    // In a real app, we would implement proper location permission handling
    // This is a placeholder for demonstration purposes
    if (Platform.OS !== 'web') {
      // Location permissions would be handled here for native platforms
    } else {
      // Web fallback or alternative
      setCurrentLocation('Chicago, IL');
    }
  };
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        
        <TouchableOpacity 
          style={styles.locationButton}
          onPress={handleLocationPermission}
        >
          <MapPin size={16} color="#4A90E2" />
          <Text style={styles.locationText}>{currentLocation}</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <SearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search hospitals, doctors, specialties..."
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Sliders size={20} color="#4A90E2" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.mapPreview}>
        <Text style={styles.mapPlaceholder}>Map View</Text>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/2159649/pexels-photo-2159649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
          style={styles.mapImage}
        />
        <View style={styles.mapOverlay} />
        <TouchableOpacity style={styles.viewMapButton}>
          <Text style={styles.viewMapText}>View Full Map</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Cancer Treatment Centers</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <HospitalList />
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
    marginBottom: 8,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#4A90E2',
    marginLeft: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 12,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F0F4F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPreview: {
    marginHorizontal: 20,
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
  },
  mapPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 160,
    zIndex: -1,
  },
  mapImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  viewMapButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  viewMapText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: '#4A90E2',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  listTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#1A1A1A',
  },
  seeAllText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#4A90E2',
  },
  scrollView: {
    flex: 1,
  },
});