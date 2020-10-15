import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class App extends React.Component {
  state = {
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.mainLogo}>Gym App</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputText}
            placeholder ="Email"
          />
        </View>
        <View style = {styles.inputContainer}>
          <TextInput 
            style={styles.inputText}
            placeholder ="Password"
          />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={() => Actions.calendar()}>Заходь Нігер</Text>            
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.loginText} onPress={() => Actions.regist()}>Sign Up</Text>
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