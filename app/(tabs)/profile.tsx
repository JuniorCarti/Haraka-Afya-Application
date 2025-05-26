import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, Bell, Lock, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  const menuItems = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: 'user',
      action: () => {},
    },
    {
      id: 'medical',
      title: 'Medical History',
      icon: 'file-text',
      action: () => {},
    },
    {
      id: 'appointments',
      title: 'My Appointments',
      icon: 'calendar',
      action: () => {},
    },
    {
      id: 'favorites',
      title: 'Saved Hospitals & Doctors',
      icon: 'heart',
      action: () => {},
    },
  ];
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Sarah Johnson</Text>
            <Text style={styles.profileEmail}>sarahjohnson@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          {menuItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.menuItem} onPress={item.action}>
              <Text style={styles.menuItemText}>{item.title}</Text>
              <ChevronRight size={20} color="#A0A0A0" />
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#D1D1D6', true: '#4A90E2' }}
              thumbColor="#FFFFFF"
            />
          </View>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Language</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.valueText}>English</Text>
              <ChevronRight size={20} color="#A0A0A0" />
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <TouchableOpacity style={styles.supportItem}>
            <HelpCircle size={20} color="#4A90E2" />
            <Text style={styles.supportItemText}>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportItem}>
            <Lock size={20} color="#4A90E2" />
            <Text style={styles.supportItemText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#E53935" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>Version 1.0.0</Text>
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
  scrollView: {
    flex: 1,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#1A1A1A',
  },
  profileEmail: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    marginTop: 2,
  },
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#F0F4F8',
    borderRadius: 8,
  },
  editButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#4A90E2',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  menuItemText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: '#1A1A1A',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    marginRight: 8,
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  supportItemText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: '#1A1A1A',
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#FFE8EC',
    paddingVertical: 16,
    borderRadius: 12,
  },
  logoutText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: '#E53935',
    marginLeft: 8,
  },
  versionText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    textAlign: 'center',
    marginBottom: 32,
  },
});