import React from 'react';
import { Text, TextProps, StyleSheet, StyleProp, TextStyle } from 'react-native';

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
  white?: boolean;
  grey?: boolean;
  greySecond?: boolean;
  greyThird?: boolean;
  appDarkGrey?: boolean;
  greyLighter?: boolean;
  redTextError?: boolean;
  alert?: boolean;
  green?: boolean;
  accent?: boolean;
  secondaryDark?: boolean;
  secondaryLight?: boolean;
  secondary?: boolean;
  secondary45?: boolean;
  primary?: boolean;
  HeaderLight?: boolean;
  black?: boolean;
  bold?: boolean;
  medium?: boolean;
  regular?: boolean;
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
        props.bold && {fontFamily: G.Font.bold},
    props.medium && {fontFamily: G.Font.medium},
    props.regular && {fontFamily: G.Font.regular},
    ]
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
