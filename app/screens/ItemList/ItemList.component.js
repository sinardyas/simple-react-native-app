import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './ItemList.style';

export default class App extends Component {
    state = {
        tasks: [
            { text: 'the quick brown fox jump over the lazy dog 1' },
            { text: 'the quick brown fox jump over the lazy dog 2' },
            { text: 'the quick brown fox jump over the lazy dog 3' },
            { text: 'the quick brown fox jump over the lazy dog 4' },
            { text: 'the quick brown fox jump over the lazy dog 5' },
            { text: 'the quick brown' },
            { text: 'the quick brown fox jump over the lazy dog 6' },
            { text: 'the quick brown fox jump over the lazy dog 7' },
            { text: 'the quick brown fox jump over the lazy dog 8' },
            { text: 'the quick brown fox jump over the lazy dog 9' },
            { text: 'the quick brown fox jump over the lazy dog 10' },
            { text: 'the quick brown fox jump over the lazy dog 11' },
            { text: 'the quick brown fox jump over the lazy dog 12' },
            { text: 'the quick brown fox jump over the lazy dog 13' },
            { text: 'the quick brown fox jump over the lazy dog 14' },
            { text: 'the quick brown fox jump over the lazy dog 15' },
        ]
    }

    onPressItem = item => () => this.props.navigation.navigate('ItemDetail', { item: item })

    renderItem = ({ item }) => (
        <View style={styles.itemWrapper}>
            <View style={styles.dateWrapper}>
                <Text style={styles.date}>
                    16
                </Text>
            </View>
            <TouchableOpacity style={styles.titleWrapper} onPress={this.onPressItem(item.text)}>
                <Text style={styles.title} numberOfLines={2}>
                    {item.text}
                </Text>
            </TouchableOpacity>
            <View style={styles.iconWrapper}>
                <Icon name='heart' style={styles.icon}/>
            </View>
        </View>
    )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            style={styles.list}
            data={this.state.tasks}
            renderItem={this.renderItem}
        />
      </View>
    );
  }
}
