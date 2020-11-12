import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Keyboard, Alert, AsyncStorage } from 'react-native';
import CustomText from '../../components/CustomText';
import { Actions } from 'react-native-router-flux';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../redux/actions/user';
import { userSelector } from '../../redux/selectors/user';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status, user } = useSelector(userSelector);
  const dispatch = useDispatch();

  const onSighInClick = () => {
    dispatch(registration({
      username,
      email,
      password
    }));
  };
  useEffect(() => {
    const redirect = async () => {
      if (status === 'success' && user) {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          Actions.main();
        }
      }
    }
    redirect();
  }, [status, user]);

  const canSingIn = email && password && username;

  return (
    <View style={styles.container}>
      <CustomText style={styles.logoFirst} weight="900">GYM</CustomText>
      <CustomText style={styles.logoSecond} weight="700">TRECKER</CustomText>
      <CustomText style={styles.title} weight="500">Registration</CustomText>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          autoCompleteType="username"
          value={username}
          onChange={e => setUsername(e.nativeEvent.text)}
        />
      </View>
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
      <TouchableOpacity
        style={[styles.inputContainer, !canSingIn && styles.disabledButton]}
        onPress={onSighInClick}
        disabled={!canSingIn}
      >
        <CustomText style={styles.textButton} weight="900">
          {status === 'loading' ? 'SIGNING UP..' : 'SIGN UP'}
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.login()}>
        <CustomText style={styles.clearButton} weight="900">GO BACK</CustomText>
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
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20
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
    textAlign: 'center',
  },
  clearButton: {
    color: "white",
    marginTop: 10,
    marginBottom: 20
  },
});

export default Registration;