import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavouritesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Favourites Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937', // Similar to Tailwind's text-gray-900
  },
});

export default FavouritesScreen;
