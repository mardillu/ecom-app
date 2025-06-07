import React from 'react';
import { View, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomText from '../components/StyledText';
import Spacer from '../components/Spacer';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container} >
            <Header showSearch={false} title={'Go back'} onBackPress={handleGoBack} />
            <ScrollView contentContainerStyle={styles.content}>
            <Spacer small />
            <Image
                source={product.image}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.infoContainer}>
            <CustomText regular f17>{product.name} {product.specs}</CustomText>
                <CustomText f32 bold>{product.price}</CustomText>

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
                <TouchableOpacity style={styles.button}>
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
});

export default ProductDetailsScreen;
