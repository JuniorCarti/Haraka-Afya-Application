import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Award, Clock } from 'lucide-react-native';

interface ModuleProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  progress: number;
}

const modules: ModuleProps[] = [
  {
    id: '1',
    title: 'Understanding Cancer Basics',
    description: 'Learn about what cancer is, how it develops, and general risk factors.',
    duration: '25 min',
    level: 'Beginner',
    progress: 0.8,
  },
  {
    id: '2',
    title: 'Early Detection Methods',
    description: 'Discover various screening methods and early warning signs.',
    duration: '30 min',
    level: 'Intermediate',
    progress: 0.5,
  },
  {
    id: '3',
    title: 'Types of Cancer Treatments',
    description: 'Overview of different treatment options and their effectiveness.',
    duration: '40 min',
    level: 'Advanced',
    progress: 0.3,
  },
  {
    id: '4',
    title: 'Cancer Prevention Strategies',
    description: 'Lifestyle changes and strategies to reduce cancer risk.',
    duration: '20 min',
    level: 'Beginner',
    progress: 0,
  },
];

export function EducationModules() {
  return (
    <View style={styles.container}>
      {modules.map((module) => (
        <TouchableOpacity key={module.id} style={styles.moduleCard}>
          <View style={styles.moduleContent}>
            <Text style={styles.moduleTitle}>{module.title}</Text>
            <Text style={styles.moduleDescription}>{module.description}</Text>
            
            <View style={styles.moduleInfo}>
              <View style={styles.infoItem}>
                <Clock size={14} color="#6E7191" />
                <Text style={styles.infoText}>{module.duration}</Text>
              </View>
              <View style={styles.infoItem}>
                <Award size={14} color="#6E7191" />
                <Text style={styles.infoText}>{module.level}</Text>
              </View>
            </View>
            
            <View style={styles.progressContainer}>
              <View style={[styles.progressBar, { width: `${module.progress * 100}%` }]} />
              <Text style={styles.progressText}>
                {module.progress > 0 ? `${Math.round(module.progress * 100)}% Complete` : 'Start'}
              </Text>
            </View>
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
  moduleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  moduleContent: {
    padding: 16,
  },
  moduleTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  moduleDescription: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#6E7191',
    marginBottom: 12,
  },
  moduleInfo: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  infoText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: '#6E7191',
    marginLeft: 4,
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#F0F4F8',
    borderRadius: 4,
    position: 'relative',
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#4A90E2',
    borderRadius: 4,
  },
  progressText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: '#4A90E2',
    position: 'absolute',
    right: 0,
    top: 12,
  },
});