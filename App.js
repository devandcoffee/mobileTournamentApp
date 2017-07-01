import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Text} from 'native-base';
import {Font} from 'expo';

export default class App extends React.Component {
  state = {
    loaded: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }
  
  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({loaded: true});
  };

  render() {
    if (!this.state.loaded) {
      return <Text>Loading....</Text>;
    }
        
    return (
      <Container>
        <Text>Hola native base</Text>
        <Text style={{
          fontFamily: 'Roboto_medium'
        }}>
          Dashboard Medium asd
        </Text>
        <Text style={{
          fontFamily: 'Roboto'
        }}>
          Dashboard Roboto
        </Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
