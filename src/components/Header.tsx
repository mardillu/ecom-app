// React imports
import React, {FC} from 'react';
import {View, StyleSheet, Image, Touchable, TouchableOpacity} from 'react-native';
import G from '../styles';
import Divider from './Divider';
import CustomText from './StyledText';
import { TextInput } from 'react-native-element-textinput';
import Spacer from './Spacer';


type HeaderProps = {
    showSearch?: boolean;
    search?: string;
    title: string;
    onBackPress?: () => void;
    setSearch?:  React.Dispatch<React.SetStateAction<string>>;
};

const Header: FC<HeaderProps> = props => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
            <View style={{marginTop: 16, marginHorizontal: 16, flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Image
                    source={G.ImageUrl.logo}
                    style={styles.imageLogo}
                    resizeMode="contain"
                />
                <CustomText
                    f10
                    w600
                >
                    DELIVERY ADDRESS
                </CustomText>
                <Image
                    source={G.ImageUrl.img_icon_notification}
                    style={styles.imageNotification}
                    resizeMode="contain"
                />
            </View>
            <CustomText
                f12
                w600
                center
                >
                Umuezike Road, Oyo State
            </CustomText>
        </View>

        {!props.showSearch && 
            <Spacer small />
        }
      
      {props.showSearch && (
      <TextInput
        value={props.search}
        onChangeText={props.setSearch}
        placeholder="Search..."
        placeholderTextColor="#CBD5E1"
        style={styles.searchInput}
        fontFamily={G.Font.regular}
        renderLeftIcon={() => (
            <>
                <Image
                    source={G.ImageUrl.img_icon_lens}
                    style={styles.imageLens}
                />
            </>
        )}
      />
      )}

      <Divider color='#e2e8f0'/>

        <TouchableOpacity
          style={styles.navStyles}
          onPress={props.onBackPress?? (() => {})}>
          <Image
                source={G.ImageUrl.img_icon_back}
                style={styles.imageBack}
                resizeMode="contain"
              />
          <CustomText f18 bold>{props.title}</CustomText>
        </TouchableOpacity>
        </View>
  );
};



const styles = StyleSheet.create({
  searchInput: {
    borderColor: '#e2e8f0',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 16,
    margin: 16,
  },

   imageBack: {
    width: 6,
    height: 13,
    marginTop: 5
  },
  imageLogo: {
    width: 56,
    height: 28,
  },
  imageNotification: {
    width: 24,
    height: 24,
  },
  imageLens: {
    width: 16,
    height: 16,
    marginRight: 16
  },
  navStyles: {margin: 8, flexDirection: 'row', alignItems: 'center', gap: 16}
});

export default Header;
