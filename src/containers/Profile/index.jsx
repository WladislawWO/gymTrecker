import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AvatarIcon from '../../assets/icons/AvatarIcon';
import CustomText from '../../components/CustomText';
import globalStyles from '../../styles/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors/user';
import { logout } from '../../redux/actions/user';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);

  const onLogoutClick = () => {
    dispatch(logout());
  }

  return (
    <View style={styles.container} >
      <View style={[styles.avatar, globalStyles.shadow]}>
        <AvatarIcon fill="#22ad5c" width="50" height="50" />
      </View>
      <CustomText style={[styles.header, styles.welcome]} weight="900">Hi, {user?.username}</CustomText>
      <CustomText style={styles.header} weight="700">Soon you will able to manage your profile and other fun stuff, right here.</CustomText>
      <TouchableOpacity style={globalStyles.outlineButton}>
        <CustomText style={globalStyles.outlineButtonText} weight="900">Edit profile</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.outlineButton}>
        <CustomText style={globalStyles.outlineButtonText} weight="900">Change password</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={[globalStyles.button, styles.logout]} onPress={onLogoutClick}>
        <CustomText style={globalStyles.buttonText} weight="900">Logout</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 30,
    marginBottom: 0
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5
  },
  header: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 20,
    width: '80%',
    color: '#fff'
  },
  logout: {
    marginBottom: 40,
    marginTop: 30
  }
});

export default Profile;