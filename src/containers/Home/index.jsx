import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends React.Component {

    render(){
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.createTraining}>
              <Text style={styles.createText}>Create new train</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262626',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    createTraining: {
        width: '30%', 
        borderRadius:5,
        backgroundColor:"#dd99ff",
        height: 50,
        justifyContent: "center",
        // alignItems:"flex-end",
        marginTop:5,
        marginLeft:250
    },
    createText: {
        fontWeight:"bold",
        color:"white"
    }
  });