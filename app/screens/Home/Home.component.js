import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './Home.style';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME</Text>
      </View>
    );
  }
}
