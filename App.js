import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Router from './components/Router';
import Loader from './components/Loader';

import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    loaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      'bungee': require('./assets/fonts/Bungee/Bungee-Regular.ttf'),
    });
    await Font.loadAsync({
      'merriweather sans': require('./assets/fonts/Merriweather_Sans/MerriweatherSans-Regular.ttf'),
    });
    this.setState({ loaded: true });
  }
  render() {
    return (
      this.state.loaded ? (<Router/>) : (<Loader />)
    );
  }
}
