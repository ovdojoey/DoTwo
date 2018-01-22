import React from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
} from 'react-native';
import * as screen from './../../helpers/Styles/screen';
import { color } from './../../helpers/Styles/colors';


class RotateLoader extends React.Component {

  state = {
    rotateAnimation: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(
        this.state.rotateAnimation,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      ))
    .start();
  }

  render() {
    const spin = this.state.rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <Animated.View
        style={{
          ...this.props.style,
          transform: [
            { rotate: spin },
            { perspective: 1000 },
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}


export default class Loader extends React.Component {
  render() {
    return (
      <View style={screen.container}>
        <RotateLoader style={{...screen.container, borderRadius: 50, borderColor: color.background, borderTopColor: color.primary, borderWidth: 3, width: 50, height: 50, flex: 0}}></RotateLoader>
      </View>
    );
  }
}
