// React imports
import React, {FC} from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';


type DividerProps = {
  style?: StyleProp<ViewStyle>;
  color?: string;
  height?: number;
  lineStyles?: StyleProp<ViewStyle>;
};

const Divider: FC<DividerProps> = props => {
  return (
    // Component start
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.line,
          {backgroundColor: props.color ? props.color : 'gray'},
          {height: props.height ? props.height : 1},
          props.lineStyles,
        ]}
      />
    </View>
    // Component end
  );
};

// custom styles for this element
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  line: {
    width: '100%',
  },
});

export default Divider;
