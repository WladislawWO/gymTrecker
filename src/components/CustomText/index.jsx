import React from 'react';
import { Text, StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
  font100: {
    fontFamily: 'MuseoSansRounded100',
  },
  font300: {
    fontFamily: 'MuseoSansRounded300',
  },
  font500: {
    fontFamily: 'MuseoSansRounded500',
  },
  font700: {
    fontFamily: 'MuseoSansRounded700',
  },
  font900: {
    fontFamily: 'MuseoSansRounded900',
  }
});

const CustomText = props => {
  const fontStyle = props.weight ? styles[`font${props.weight}`] : styles.font500;
  return (
    <Text style={[fontStyle, props.style]}>
      {props.children}
    </Text>
  );
}

export default CustomText;
