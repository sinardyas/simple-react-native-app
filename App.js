import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './app/screens/Home/Home.component';
import ItemDetailScreen from './app/screens/ItemDetail/ItemDetail.component';
import ItemListScreen from './app/screens/ItemList/ItemList.component';

const SideMenu = createDrawerNavigator(
  {
    Home: HomeScreen,
    ItemList: {
      screen: ItemListScreen,
      navigationOptions: () => ({ title: 'Calendar' })
    }
  }
)

const HomeStack = createStackNavigator(
  {
    Home: SideMenu,
    ItemDetail: ItemDetailScreen
  },
  {
    initialRouteName: 'Home'
  }
)

const AppNavigator = createAppContainer(HomeStack)

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
