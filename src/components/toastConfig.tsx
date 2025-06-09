import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BaseToastProps } from 'react-native-toast-message';
import G from '../styles';
import CustomText from './StyledText';

const toastConfig = {
  success: ({ text1, hide }: BaseToastProps) => (
    <View style={toastStyles.container}>
      <View style={toastStyles.iconContainer}>
        <Image
          style={toastStyles.image}
          resizeMode="contain"
          source={G.ImageUrl.img_icon_check_circle} />
         <CustomText f14 w600 color='#334155'>{text1}</CustomText>
      </View>
     
      <TouchableOpacity onPress={hide}>
        <Image 
          style={toastStyles.image}
          resizeMode="contain"
          source={G.ImageUrl.img_icon_close} />
      </TouchableOpacity>
    </View>
  ),
};

const toastStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    borderLeftColor: '#22c55e',
    borderLeftWidth: 4
  },
  iconContainer: {
    marginRight: 12,
    flexDirection: 'row',
    gap: 8
  },
  image: {
    width: 24,
    height: 24
  }
});

export default toastConfig;
