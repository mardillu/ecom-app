import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import G from '../styles';
import CustomText from './StyledText';
import { Product, useCart } from '../context/CartContext';

type CartItemProps = {
  product: Product;
};

const CartItem = ({ product}: CartItemProps) => {
    const { cartItems, addToCart, removeFromCart, removeAllFromCart } = useCart();
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.details}>
        <CustomText  f12 w400>{product.name}</CustomText>
        <CustomText f17 w600 color='#334155'>${product.price.toFixed(2)}</CustomText>
        <CustomText f12 color='#10B981'>
          In stock
        </CustomText>
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => removeFromCart(product.id)} style={styles.controlButtonRemove}>
             <Image source={G.ImageUrl.hugeicons_minus} style={styles.qControl} />
          </TouchableOpacity>
          <CustomText f12 regular color='#334155'>{cartItems.filter(item => item.id === product.id).length}</CustomText>
          <TouchableOpacity onPress={() => addToCart(product)} style={styles.controlButtonAdd}>
            <Image source={G.ImageUrl.hugeicons_add} style={styles.qControl} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeAllFromCart(product.id)} style={styles.controlButtonRemoveAll}>
            <Image source={G.ImageUrl.hugeicons_delete} style={styles.qControl} />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#F6F5F8',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  image: {
    width: 103,
    height: 106,
    resizeMode: 'contain',
    marginRight: 12,
  },
  qControl: {
    height: 20,
    width: 20,
  },
  details: {
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 12,
  },
  controlButtonAdd: {
    width: 36,
    height: 36,
    borderRadius: 16,
    borderColor: '#E2E8F0', 
    backgroundColor: '#FFF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
   controlButtonRemove: {
    width: 36,
    height: 36,
    borderRadius: 16,
    borderColor: '#E2E8F0', 
    borderWidth: 1,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
   controlButtonRemoveAll: {
    width: 36,
    height: 36,
    borderRadius: 16,
    borderColor: '#E2E8F0', 
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
});

export default CartItem;
