import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import CustomText from '../../components/CustomText';
import { Actions } from 'react-native-router-flux';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSighInClick = () => {
    Keyboard.dismiss();
    Actions.main();
  }
  const canSingIn = email && password;

  return (
    <View style={styles.container}>
      <CustomText style={styles.logoFirst} weight="900">GYM</CustomText>
      <CustomText style={styles.logoSecond} weight="700">TRECKER</CustomText>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          autoCompleteType="email"
          value={email}
          onChange={e => setEmail(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry
          value={password}
          onChange={e => setPassword(e.nativeEvent.text)}
        />
      </View>
      <TouchableOpacity>
        <CustomText style={styles.clearButton} weight="900">FORGOT YOUR PASSWORD?</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.inputContainer, !canSingIn && styles.disabledButton]}
        onPress={onSighInClick}
        disabled={!canSingIn}
      >
        <CustomText style={styles.textButton} weight="900">SIGN IN</CustomText>
      </TouchableOpacity>
      <TouchableOpacity>
        <CustomText style={styles.clearButton} weight="900">SIGN UP</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  logoFirst: {
    fontSize: 80,
    color: 'white',
  },
  logoSecond: {
    fontSize: 40,
    color: 'white',
    marginTop: -10,
    marginBottom: 100
  },
  inputContainer: {
    width: "75%",
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 50,
    marginBottom: 15,
    padding: 20,
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 5,
  },
  disabledButton: {
    opacity: 0.5
  },
  inputText: {
    fontFamily: 'MuseoSansRounded500',
    height: 50,
    color: "#44484b"
  },
  textButton: {
    color: "#22ad5c",
    textAlign: 'center'
  },
  clearButton: {
    color: "white",
    marginTop: 10,
    marginBottom: 20
  }
});

export default App;