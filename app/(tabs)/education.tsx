import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EducationModules } from '@/components/education/EducationModules';
import { SearchInput } from '@/components/common/SearchInput';
import { Filter } from 'lucide-react-native';

export default function EducationScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Cancer Education</Text>
        <Text style={styles.subtitle}>Learn about symptoms, treatments, and prevention</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <SearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search for cancer types, symptoms..."
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#4A90E2" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Topic</Text>
          <TouchableOpacity style={styles.featuredCard}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.featuredImage}
            />
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTag}>AWARENESS</Text>
              <Text style={styles.featuredTitle}>Understanding Breast Cancer Early Signs</Text>
              <Text style={styles.featuredDescription}>
                Learn about the early warning signs and risk factors for breast cancer.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.modulesSection}>
          <Text style={styles.sectionTitle}>Learning Modules</Text>
          <EducationModules />
        </View>
        
        <View style={styles.resourcesSection}>
          <Text style={styles.sectionTitle}>Additional Resources</Text>
          <TouchableOpacity style={styles.resourceButton}>
            <Text style={styles.resourceButtonText}>Download Resources</Text>
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
  scrollView: {
    flex: 1,
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  featuredCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  featuredImage: {
    width: '100%',
    height: 160,
  },
  featuredContent: {
    padding: 16,
  },
  featuredTag: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: '#4A90E2',
    marginBottom: 8,
  },
  featuredTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  featuredDescription: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    lineHeight: 20,
  },
  modulesSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  resourcesSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
    alignItems: 'center',
  },
  resourceButton: {
    backgroundColor: '#2ECC71',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  resourceButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
});