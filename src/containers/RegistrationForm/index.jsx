import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class RegistrationForm extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.mainLogo}>Gym App</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputText}
            placeholder ="Userame"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputText}
            placeholder ="Enter email"
          />
        </View>
        <View style = {styles.inputContainer}>
          <TextInput 
            style={styles.inputText}
            placeholder ="Enter Password"
          />
          </View>
          
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Register</Text>            
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
    justifyContent: 'center',
  },
  mainLogo: {
    fontSize: 50,
    fontWeight:"bold",
    color:"#dd99ff",
    marginBottom:40
  }, 
  inputContainer: {
    width: "80%",
    backgroundColor: "#737373",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    padding: 20,
    justifyContent: "center",
  },
  inputText: {
    height: 50,
    color: "white"
  },
  loginBtn: {
    width: '80%', 
    borderRadius:25,
    backgroundColor:"#dd99ff",
    height: 50,
    justifyContent: "center",
    alignItems:"center",
    marginTop: 30,
    marginBottom: 20
  },
  loginText: {
    fontWeight:"bold",
    color:"white"
  }
});