import React, { useState } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { products } from '../data/products';
import CustomText from '../components/StyledText';
import Spacer from '../components/Spacer';
import Divider from '../components/Divider';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
        <Header showSearch={true} search={search} setSearch={setSearch} title={'Technology'} />
        <Divider color='#F5F5F5' />


      {/* Product Grid */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
            <CustomText f18 mono style={{margin: 8}}>Smartphones, Laptops & Assecories</CustomText>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <CustomText f14 regular>{item.name}</CustomText>
            <CustomText f14 regular numberOfLines={1} ellipsizeMode="tail">{item.specs}</CustomText>
            <Spacer xsmall />
            <CustomText f16 bold>{item.price}</CustomText>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: '50%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 162,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    color: '#777',
    marginTop: 4,
  },
});

export default Home;
