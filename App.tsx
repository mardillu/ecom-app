import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/navigation/Tabs';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import Toast from 'react-native-toast-message';
import toastConfig from './src/components/toastConfig';
import { CartProvider } from './src/context/CartContext';
import CartScreen from './src/screens/Cart';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={Tabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
           options={{headerShown: false}}
        />
          <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
     <Toast config={toastConfig} position="top"/>
    </CartProvider>
  );
}
