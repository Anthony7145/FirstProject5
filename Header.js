import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Header;