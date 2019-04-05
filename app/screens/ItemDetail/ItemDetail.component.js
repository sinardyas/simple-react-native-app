import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './ItemDetail.style';

export default class App extends Component {
    state = {
        tasks: [
            { text: 'the quick brown fox jump over the lazy dog' },
            { text: 'the quick brown fox jump over the lazy dog' },
            { text: 'the quick brown fox jump over the lazy dog' },
            { text: 'the quick brown fox jump over the lazy dog' },
            { text: 'the quick brown fox jump over the lazy dog' }
        ]
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam('item', '')}</Text>
      </View>
    );
  }
}
