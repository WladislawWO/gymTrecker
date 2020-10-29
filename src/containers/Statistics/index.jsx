import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../../components/CustomText';

const Statistics = () => {
  return (
    <View style={{flex:1}}>
      <CustomText style={styles.header} weight="700">Statistics</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 15,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    color: '#22ad5c'
  }
});

export default Statistics;