import React from 'react';
import { View, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomText from '../components/StyledText';
import Spacer from '../components/Spacer';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useCart } from '../context/CartContext';
import G from '../styles';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const { addToCart, toggleFavourite, favouriteItems } = useCart();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddToCart = () => {
    addToCart(product);

    Toast.show({
        type: 'success',
        text1: 'Item has been added to cart',
    });
};

const handleToggleFavourite = () => {
  toggleFavourite(product);
};

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container} >
            <Header showSearch={false} title={'Go back'} onBackPress={handleGoBack} />
            <ScrollView contentContainerStyle={styles.content}>
            <Spacer small />
             <View style={styles.favContainer}>
            <Image
                source={product.image}
                style={styles.image}
                resizeMode="contain"
            />
            <TouchableOpacity
                style={styles.heartContainer}
                onPress={() => handleToggleFavourite()}
                >
                <Image
                    source={favouriteItems.includes(product) ? G.ImageUrl.hugeicons_favourited : G.ImageUrl.hugeicons_favourite}
                    style={styles.likeImage}
                />
            </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
            <CustomText regular f17>{product.name} {product.specs}</CustomText>
                <CustomText f32 bold>${product.price.toFixed(2)}</CustomText>

                <Spacer small />

            <CustomText regular f14 color={'#999999'}>About this item</CustomText>
                {product.description.map((item: string, index: number) => (
                    <View key={index} style={{flexDirection: 'row'}}> 
                        <CustomText regular f14 color={'#999999'}>
                        •
                        </CustomText>
                    <CustomText regular f14 color={'#999999'} style={{marginLeft: 8}}>
                            {item}
                        </CustomText>
                    </View>
                ))}
            </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleAddToCart}
                    style={styles.button}>
                    <CustomText f14 bold color='#fff'>Add to cart</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    position: 'relative',
  },
  content: {
    paddingBottom: 100,
  },
  image: {
    width: '100%',
    height: 380,
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
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
  favContainer: {
    width: '100%',
    height: 380,
  },
  likeImage: {
    width: 24,
    height: 24,
  },
  heartContainer: {
    position: 'absolute',
    top: 12,
    right: 24,
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ProductDetailsScreen;
