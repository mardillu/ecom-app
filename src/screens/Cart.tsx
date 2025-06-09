import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../components/StyledText';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import Toast from 'react-native-toast-message';

const CartScreen = () => {
  const { cartItems, getUniqueCartItems } = useCart();
   const navigation = useNavigation();

   const subTotal = cartItems.reduce((total, item) => total + item.price, 0);
   const grandTotal = subTotal + 10;
  
    const handleGoBack = () => {
      navigation.goBack();
    };

      const handleCheckout = () => {
        Toast.show({
            type: 'success',
            text1: 'Item has been added to cart',
        });
    };
  return (
     <SafeAreaView style={styles.safeArea}>
       <View style={styles.wrapper} >
        <Header showSearch={false} title={'Your Cart'} onBackPress={handleGoBack} />

        {cartItems.length == 0 ? 
        (
          <View style={styles.emptyContainer}>
            <CustomText f18 regular >Your cart is empty</CustomText>
          </View>
        ):(
          <>
          <FlatList
            data={getUniqueCartItems()}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
              <CartItem
                product={item}
              />
            )}
            ListFooterComponent={() => (
              <>
                <Spacer small />
                <View style={styles.orderInfo}>
                  <CustomText f14 w700>Order Info</CustomText>
                  <Spacer small />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CustomText f12 w500>Subtotal</CustomText>
                    <CustomText f12 w500>${subTotal}</CustomText>
                  </View>
                  <Spacer small />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CustomText f12 w500>Shipping</CustomText>
                    <CustomText f12 w500>$10</CustomText>
                  </View>
                  <Spacer small />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CustomText f12 w500>Total</CustomText>
                    <CustomText f14 bold>${grandTotal}</CustomText>
                  </View>
                </View>

                <Spacer xxxlarge />
              </>
            )}
          />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => handleCheckout()}
                    style={styles.button}>
                    <CustomText f14 bold color='#fff'>Checkout (${grandTotal})</CustomText>
                </TouchableOpacity>
            </View>
            </>
        )}
        </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    orderInfo: {
        marginHorizontal: 16
    },
   safeArea: {
    flex: 1,
  },
     buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    backgroundColor: '#60B5FF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
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
