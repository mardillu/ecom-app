import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CartScreen from '../screens/Cart';
import FavouritesScreen from '../screens/Favourites';
import ProfileScreen from '../screens/Profile';
import { Image, View } from 'react-native';
import G from '../styles';
import { StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {getUniqueCartItems} = useCart();
  const getIcon = (name: string) => {
    if (name === 'Home') return G.ImageUrl.hugeicons_home;
    else if (name === 'Cart') return G.ImageUrl.hugeicons_shopping_cart;
    else if (name === 'Favourites') return G.ImageUrl.hugeicons_favourite;
    else if (name === 'Profile') return G.ImageUrl.hugeicons_user;
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'CartTab') iconName = focused ? 'cart' : 'cart-outline';
          else if (route.name === 'Favourites') iconName = focused ? 'heart' : 'heart-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

          return <View style={focused ? styles.iconContainer: {}} >
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={getIcon(route.name)}
                    tintColor={focused ? 'white' : 'black'} />
                </View>
        },
        tabBarActiveTintColor: '#60B5FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabelStyle: { marginTop: 5, fontSize: 14 },
        tabBarBadgeStyle: { backgroundColor: '#3C4856' },
        tabBarStyle: {height: 70 },
        tabBarBadge: route.name === 'CartTab' && getUniqueCartItems().length > 0 ? getUniqueCartItems().length : undefined
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="CartTab"
        component={() => null} // or an empty dummy component
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // prevent default tab behavior
            navigation.navigate('Cart'); // navigate to stack-level Cart screen
          },
        })}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : {}}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={G.ImageUrl.hugeicons_shopping_cart}
                tintColor={focused ? 'white' : 'black'}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    backgroundColor: '#60B5FF',
    height: 32,
    width: 56,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Tabs;
