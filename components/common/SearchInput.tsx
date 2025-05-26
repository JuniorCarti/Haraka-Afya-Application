import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Search } from 'lucide-react-native';

interface SearchInputProps extends TextInputProps {
  style?: any;
}

export function SearchInput({ style, ...props }: SearchInputProps) {
  return (
    <View style={[styles.container, style]}>
      <Search size={20} color="#A0A0A0" />
      <TextInput
        style={styles.input}
        placeholderTextColor="#A0A0A0"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: '#1A1A1A',
  },
});