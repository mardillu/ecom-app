import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Cart Screen</Text>
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
    color: '#1f2937', // Matches Tailwind's text-gray-900
  },
});

export default CartScreen;
