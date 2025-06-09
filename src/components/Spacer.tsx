// React imports
import React from 'react';
import {View} from 'react-native';
import G from '../styles';
// Global imports

type Props = {
  xxxsmall?: boolean;
  xxsmall?: boolean;
  xsmall?: boolean;
  small11?: boolean;
  small?: boolean;
  medium20?: boolean;
  medium21?: boolean;
  medium22?: boolean;
  medium?: boolean;
  medium26?: boolean;
  large?: boolean;
  large33?: boolean;
  large37?: boolean;
  xlarge?: boolean;
  xxlarge?: boolean;
  xxxlarge?: boolean;
};

const Spacer = (props: Props) => {
  // Local functions
  let space = G.Gutter.g24;

  // Local conditionals
  if (props.xxxsmall) {
    space = G.Gutter.g2;
  }
  if (props.xxsmall) {
    space = G.Gutter.g4;
  }
  if (props.xsmall) {
    space = G.Gutter.g8;
  }
  if (props.small11) {
    space = G.Gutter.g11;
  }
  if (props.small) {
    space = G.Gutter.g16;
  }
  if (props.medium20) {
    space = G.Gutter.g20;
  }
  if (props.medium21) {
    space = G.Gutter.g21;
  }
  if (props.medium22) {
    space = G.Gutter.g22;
  }
  if (props.medium) {
    space = G.Gutter.g24;
  }
  if (props.medium26) {
    space = G.Gutter.g26;
  }
  if (props.large) {
    space = G.Gutter.g32;
  }
  if (props.large33) {
    space = G.Gutter.g33;
  }
  if (props.large37) {
    space = G.Gutter.g37;
  }
  if (props.xlarge) {
    space = G.Gutter.g40;
  }
  if (props.xxlarge) {
    space = G.Gutter.g50;
  }
  if (props.xxxlarge) {
    space = G.Gutter.g100;
  }

  return (
    // Component start
    <View style={{height: space, width: space}} />
    // Component end
  );
};

export default Spacer;
