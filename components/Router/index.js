import React from 'react';

/* Router / Tab System */
import { TabNavigator } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import { color } from './../../helpers/Styles/colors';

/* Screens */
import HomeScreen from './../Home';

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Feather
          name={focused ? 'check-circle' : 'check-circle'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Achievements: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Achievements',
      tabBarIcon: ({ tintColor, focused }) => (
        <Feather
          name={focused ? 'award' : 'award'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Settings: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Feather
          name={focused ? 'settings' : 'settings'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
},
{
  initialRouteName: "Home",
  animationEnabled: false,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: color.primary,
    pressColor: color.primary,
    showLabel: false,
  },
});

export default RootTabs;
