import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, Platform } from 'react-native';
import { MapPin, Star, Phone, Clock } from 'lucide-react-native';

interface HospitalProps {
  id: string;
  name: string;
  specialty: string;
  address: string;
  distance: string;
  rating: number;
  reviews: number;
  openNow: boolean;
  image: string;
  phone: string;
  consultationFee: string;
  doctors: {
    name: string;
    specialty: string;
    available: boolean;
    nextAvailable?: string;
  }[];
}

const hospitals: HospitalProps[] = [
  {
    id: '1',
    name: 'Nairobi Hospital',
    specialty: 'Comprehensive Cancer Care, Oncology',
    address: 'Argwings Kodhek Rd, Nairobi',
    distance: '0.8 km',
    rating: 4.8,
    reviews: 324,
    openNow: true,
    phone: '+254 20 2845000',
    consultationFee: 'KES 2,500 - 3,500',
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    doctors: [
      {
        name: 'Dr. Sarah Kimani',
        specialty: 'Medical Oncologist',
        available: true
      },
      {
        name: 'Dr. John Mwangi',
        specialty: 'Radiation Oncologist',
        available: false,
        nextAvailable: 'Tomorrow 10:00 AM'
      }
    ]
  },
  {
    id: '2',
    name: 'Aga Khan University Hospital',
    specialty: 'Cancer Treatment, Research',
    address: '3rd Parklands Avenue, Nairobi',
    distance: '2.3 km',
    rating: 4.7,
    reviews: 286,
    openNow: true,
    phone: '+254 20 3662000',
    consultationFee: 'KES 3,000 - 4,000',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    doctors: [
      {
        name: 'Dr. Alice Wanjiku',
        specialty: 'Surgical Oncologist',
        available: true
      },
      {
        name: 'Dr. David Omondi',
        specialty: 'Medical Oncologist',
        available: false,
        nextAvailable: 'Friday 2:00 PM'
      }
    ]
  },
  {
    id: '3',
    name: 'Kenyatta National Hospital',
    specialty: 'Cancer Treatment Center',
    address: 'Hospital Rd, Upper Hill, Nairobi',
    distance: '3.5 km',
    rating: 4.5,
    reviews: 412,
    openNow: true,
    phone: '+254 20 2726300',
    consultationFee: 'KES 1,000 - 2,000',
    image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    doctors: [
      {
        name: 'Dr. Peter Kamau',
        specialty: 'Medical Oncologist',
        available: true
      },
      {
        name: 'Dr. Mary Njeri',
        specialty: 'Radiation Oncologist',
        available: true
      }
    ]
  }
];

export function HospitalList() {
  const handleCall = (phone: string) => {
    if (Platform.OS !== 'web') {
      Linking.openURL(`tel:${phone}`);
    } else {
      window.location.href = `tel:${phone}`;
    }
  };

  const handleViewDetails = (hospital: HospitalProps) => {
    // In a real app, this would navigate to a detailed view
    alert(`
Hospital: ${hospital.name}
Consultation Fee: ${hospital.consultationFee}

Available Doctors:
${hospital.doctors.map(doctor => `
${doctor.name} - ${doctor.specialty}
${doctor.available ? 'Available Now' : `Next Available: ${doctor.nextAvailable}`}
`).join('\n')}
    `);
  };

  return (
    <View style={styles.container}>
      {hospitals.map((hospital) => (
        <TouchableOpacity 
          key={hospital.id} 
          style={styles.hospitalCard}
          onPress={() => handleViewDetails(hospital)}
        >
          <Image source={{ uri: hospital.image }} style={styles.hospitalImage} />
          
          <View style={styles.hospitalContent}>
            <View style={styles.hospitalHeader}>
              <Text style={styles.hospitalName}>{hospital.name}</Text>
              <View style={styles.ratingContainer}>
                <Star size={14} color="#FFA000" fill="#FFA000" />
                <Text style={styles.ratingText}>{hospital.rating}</Text>
                <Text style={styles.reviewsText}>({hospital.reviews})</Text>
              </View>
            </View>
            
            <Text style={styles.specialtyText}>{hospital.specialty}</Text>
            
            <View style={styles.addressContainer}>
              <MapPin size={14} color="#6E7191" />
              <Text style={styles.addressText}>{hospital.address}</Text>
              <Text style={styles.distanceText}>{hospital.distance}</Text>
            </View>
            
            <View style={styles.hospitalFooter}>
              <View style={[
                styles.statusContainer,
                { backgroundColor: hospital.openNow ? '#E6F7EF' : '#FFE8EC' }
              ]}>
                <Clock size={14} color={hospital.openNow ? '#2ECC71' : '#E53935'} />
                <Text style={[
                  styles.statusText,
                  { color: hospital.openNow ? '#2ECC71' : '#E53935' }
                ]}>
                  {hospital.openNow ? 'Open Now' : 'Closed'}
                </Text>
              </View>
              
              <View style={styles.actionsContainer}>
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => handleCall(hospital.phone)}
                >
                  <Phone size={16} color="#4A90E2" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.detailsButton}
                  onPress={() => handleViewDetails(hospital)}
                >
                  <Text style={styles.detailsButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  hospitalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  hospitalImage: {
    width: '100%',
    height: 140,
  },
  hospitalContent: {
    padding: 16,
  },
  hospitalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  hospitalName: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#1A1A1A',
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    color: '#1A1A1A',
    marginLeft: 4,
  },
  reviewsText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: '#6E7191',
    marginLeft: 2,
  },
  specialtyText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#4A90E2',
    marginBottom: 8,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  addressText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    marginLeft: 4,
    marginRight: 8,
  },
  distanceText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: '#4A90E2',
  },
  hospitalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  statusText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    marginLeft: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F4F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  detailsButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  detailsButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
});