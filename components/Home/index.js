import React from 'react';
import {
  Text,
  Button,
  View,
} from 'react-native';
import * as typography from './../../helpers/Styles/typography';
import * as screen from './../../helpers/Styles/screen';


export default class App extends React.Component {

  state = {
    goals: [],
  }

  render() {
    return (
      <View style={screen.container}>
        <Text style={typography.heading}>Do Two</Text>
        <Welcome goals={this.state.goals} />
      </View>
    );
  }
}

class Welcome extends React.Component {

  render() {
    return(
      this.props.goals.length ? (<Goals />) : (<GetStarted />)
    );
  }
}


class GetStarted extends React.Component {
  render() {
    return(
      <View>
        <Text style={typography.text}>Forget lists.  DoTwo makes goals easy and achieveable.</Text>
      </View>
    );
  }
}

class Goals extends React.Component {
  render() {
    return(
      <View>
        <Text style={typography.text}>Goals</Text>
      </View>
    );
  }
}
