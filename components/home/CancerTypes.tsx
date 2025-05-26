import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

interface CancerTypeProps {
  id: string;
  title: string;
  image: string;
  color: string;
}

const cancerTypes: CancerTypeProps[] = [
  {
    id: 'breast',
    title: 'Breast Cancer',
    image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#FF5A87',
  },
  {
    id: 'lung',
    title: 'Lung Cancer',
    image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#4A90E2',
  },
  {
    id: 'colon',
    title: 'Colorectal',
    image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#2ECC71',
  },
  {
    id: 'prostate',
    title: 'Prostate',
    image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#9B59B6',
  },
];

export function CancerTypes() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {cancerTypes.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <View style={[styles.imageContainer, { backgroundColor: `${item.color}20` }]}>
            <View style={[styles.imageOverlay, { backgroundColor: `${item.color}40` }]} />
            <Text style={[styles.cardTitle, { color: item.color }]}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  contentContainer: {
    paddingRight: 20,
  },
  card: {
    width: 140,
    height: 100,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    padding: 12,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cardTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
  },
});