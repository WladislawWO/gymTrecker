import { StyleSheet } from 'react-native';
const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 0,
  elevation: 5,
}
export default StyleSheet.create({
  shadow: { ...shadow },
  outlineButton: {
    justifyContent: "center",
    width: '75%',
    height: 50,
    marginBottom: 15,
    padding: 20,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 2,
  },
  outlineButtonText: {
    color: "#fff",
    textAlign: 'center',
  },
  button: {
    width: "75%",
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 50,
    marginBottom: 15,
    padding: 20,
    justifyContent: "center",
    ...shadow
  },
  buttonText: {
    color: "#22ad5c",
    textAlign: 'center',
  }
});