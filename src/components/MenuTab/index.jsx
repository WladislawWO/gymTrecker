import React from 'react';
import { StyleSheet, View  } from 'react-native';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import StatisticsIcon from '../../assets/icons/StatisticsIcon';
import WorkoutIcon from '../../assets/icons/WorkoutIcon';
import CustomText from '../CustomText';

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: '100%',
  },
  icon: {
    width: 40
  }
});

const MenuTab = props => {
  console.log(props)
  let textColor = props.focused ? '#22ad5c' : '#999999';
  return (
    <View style={styles.tabs}>
      {props.title === 'Workouts' && <WorkoutIcon fill={textColor} width="30" height="30" /> }
      {props.title === 'Statistics' && <StatisticsIcon fill={textColor} width="30" height="30" /> }
      {props.title === 'Profile' && <ProfileIcon fill={textColor} width="30" height="30" /> }
      <CustomText style={{color: textColor}}>{props.title}</CustomText>
    </View>
  );
}

export default MenuTab;
