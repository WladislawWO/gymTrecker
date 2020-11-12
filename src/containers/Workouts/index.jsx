import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import CustomText from '../../components/CustomText';
import { Agenda } from 'react-native-calendars';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors/user';
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Workouts = () => {
  const [items, setItems] = useState([]);
  const { user } = useSelector(userSelector);
  useEffect(() => {
    if(!user) {
      Actions.login();
    }
  }, [user]);

  const loadItems = (day) => {
    for (let i = -15; i < 85; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = timeToString(time);
      if (!items[strTime]) {
        items[strTime] = [];
        const numItems = Math.floor(Math.random() * 3 + 1);
        for (let j = 0; j < numItems; j++) {
          items[strTime].push({
            name: 'Item for ' + strTime + ' #' + j,
            height: Math.max(50, Math.floor(Math.random() * 150)),
          });
        }
      }
    }
    const newItems = {};
    Object.keys(items).forEach((key) => {
      newItems[key] = items[key];
    });
    setItems(newItems);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => console.log(item.name)} style={[styles.item]}>
        <CustomText>{item.name}</CustomText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex:1}}>
      <CustomText style={styles.header} weight="700">Workouts</CustomText>
      <View style={styles.container}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={new Date()}
          renderItem={renderItem}
          style={styles.calendar}
        />
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={()=> Actions.login()}
        >
          <CustomText weight="700" style={styles.buttonText}>Start training</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 5,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  container: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#fff',
    margin: 10,
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 15,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    color: '#22ad5c'
  },
  inputContainer: {
    backgroundColor: '#30a561',
    borderRadius: 5,
    margin: 10,
    padding: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff'
  }
});

export default Workouts;