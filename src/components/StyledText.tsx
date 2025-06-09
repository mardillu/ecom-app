import React from 'react';
import { Text, TextProps, StyleSheet, StyleProp, TextStyle } from 'react-native';
import G from '../styles';

interface CustomTextProps extends TextProps {
    testID?: string;
  f32?: boolean;
  f31?: boolean;
  f30?: boolean;
  f29?: boolean;
  f28?: boolean;
  f27?: boolean;
  f26?: boolean;
  f25?: boolean;
  f24?: boolean;
  f23?: boolean;
  f22?: boolean;
  f21?: boolean;
  f20?: boolean;
  f19?: boolean;
  f18?: boolean;
  f17?: boolean;
  f16?: boolean;
  f15?: boolean;
  f14?: boolean;
  f13?: boolean;
  f12?: boolean;
  f11?: boolean;
  f10?: boolean;
  f9?: boolean;
  f8?: boolean;
  f7?: boolean;
  f6?: boolean;
  f5?: boolean;
  w800?: boolean;
  w500?: boolean;
  w700?: boolean;
  w400?: boolean;
  w600?: boolean;
  color?: string;
  HeaderLight?: boolean;
  black?: boolean;
  bold?: boolean;
  medium?: boolean;
  regular?: boolean;
  mono?: boolean;
  center?: boolean;
  right?: boolean;
  italic?: boolean;
  underline?: boolean;
  capitalize?: boolean;
  flexWrap?: boolean;
  width?: number;
  maxFontSizeMultiplier?: number;
  adjustsFontSizeToFit?: boolean;
  numberOfLines?: number;
  allowFontScaling?: boolean;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = props => {
    const style = [
    props.f32 && {fontSize: G.TextSize.f32},
    props.f31 && {fontSize: G.TextSize.f31},
    props.f30 && {fontSize: G.TextSize.f30},
    props.f29 && {fontSize: G.TextSize.f29},
    props.f28 && {fontSize: G.TextSize.f28},
    props.f27 && {fontSize: G.TextSize.f27},
    props.f26 && {fontSize: G.TextSize.f26},
    props.f25 && {fontSize: G.TextSize.f25},
    props.f24 && {fontSize: G.TextSize.f24},
    props.f23 && {fontSize: G.TextSize.f23},
    props.f22 && {fontSize: G.TextSize.f22},
    props.f21 && {fontSize: G.TextSize.f21},
    props.f20 && {fontSize: G.TextSize.f20},
    props.f19 && {fontSize: G.TextSize.f19},
    props.f18 && {fontSize: G.TextSize.f18},
    props.f17 && {fontSize: G.TextSize.f17},
    props.f16 && {fontSize: G.TextSize.f16},
    props.f15 && {fontSize: G.TextSize.f15},
    props.f14 && {fontSize: G.TextSize.f14},
    props.f13 && {fontSize: G.TextSize.f13},
    props.f12 && {fontSize: G.TextSize.f12},
    props.f11 && {fontSize: G.TextSize.f11},
    props.f10 && {fontSize: G.TextSize.f10},
    props.f9 && {fontSize: G.TextSize.f9},
    props.f8 && {fontSize: G.TextSize.f8},
    props.f7 && {fontSize: G.TextSize.f7},
    props.f6 && {fontSize: G.TextSize.f6},
    props.f5 && {fontSize: G.TextSize.f5},
    props.color && {color: props.color},
    props.w800 && {fontWeight: G.TextWeight.w800, fontFamily: G.Font.bold},
    props.w500 && {fontWeight: G.TextWeight.w500, fontFamily: G.Font.medium},
    props.w700 && {fontWeight: G.TextWeight.w700, fontFamily: G.Font.bold},
    props.w400 && {fontWeight: G.TextWeight.w400, fontFamily: G.Font.regular},
    props.w600 && {fontWeight: G.TextWeight.w600, fontFamily: G.Font.medium},
    props.bold && {fontFamily: G.Font.bold},
    props.medium && {fontFamily: G.Font.medium},
    props.regular && {fontFamily: G.Font.regular},
    props.mono && {fontFamily: G.Font.mono},
    props.center && {textAlign: 'center'},
    props.right && {textAlign: 'right'},
    props.underline && {textDecorationLine: 'underline'},
    props.capitalize && {textTransform: 'capitalize'},
    props.flexWrap && {flexWrap: 'wrap'},
    props.width && {width: '100%'},
    props.style,
  ];
  return (
   <Text
      testID={props.testID}
      style={style.filter(Boolean) as StyleProp<TextStyle>}
      maxFontSizeMultiplier={props.maxFontSizeMultiplier ?? 2}
      adjustsFontSizeToFit={props.adjustsFontSizeToFit ?? undefined}
      numberOfLines={props.numberOfLines ?? undefined}
      ellipsizeMode={props.ellipsizeMode ?? undefined}
      allowFontScaling={props.allowFontScaling ?? true}
      accessibilityLabel={props.accessibilityLabel}
      accessibilityHint={props.accessibilityHint}
      accessibilityRole={props.accessibilityRole}
      accessible={props.accessible}>
      {props.children}
    </Text>
  );
};

export default CustomText;
