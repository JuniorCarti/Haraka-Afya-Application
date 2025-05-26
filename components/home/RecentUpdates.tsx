import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

interface UpdateProps {
  id: string;
  title: string;
  date: string;
  image: string;
  tag: string;
}

const updates: UpdateProps[] = [
  {
    id: '1',
    title: 'New research on early detection methods',
    date: 'Oct 15, 2023',
    image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Research',
  },
  {
    id: '2',
    title: 'Understanding cancer treatment options',
    date: 'Oct 10, 2023',
    image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Treatment',
  },
  {
    id: '3',
    title: 'Nutrition guidelines for cancer prevention',
    date: 'Oct 5, 2023',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Prevention',
  },
];

export function RecentUpdates() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {updates.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTag}>{item.tag}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
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
    width: 250,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 12,
  },
  cardTag: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: '#4A90E2',
    marginBottom: 6,
  },
  cardTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 6,
  },
  cardDate: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: '#6E7191',
  },
});