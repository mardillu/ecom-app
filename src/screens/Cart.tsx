import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../components/StyledText';
import Header from '../components/Header';

const CartScreen = () => {
  const { cartItems, getUniqueCartItems } = useCart();
   const navigation = useNavigation();
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  return (
     <SafeAreaView style={styles.safeArea}>
       <View style={styles.wrapper} >
        <Header showSearch={false} title={'Go back'} onBackPress={handleGoBack} />
          <FlatList
            data={getUniqueCartItems()}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
              <CartItem
                product={item}
              />
            )}
          />

        </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    position: 'relative',
  },
  container: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
});

export default CartScreen;
