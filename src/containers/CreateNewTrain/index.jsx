import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';

export default class CreateNewTrain extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.mainLogo}>Gym App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainLogo: {
    fontSize: 50,
    fontWeight:"bold",
    color:"#dd99ff",
    marginBottom:40
  }, 
  
});