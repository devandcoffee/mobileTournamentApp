import React from 'react';
import { Container, Text } from 'native-base';
import { Font } from 'expo';

import { AppNavigator } from './src/navigators';

export default class App extends React.Component {
  state = {
    loaded: false
  };

  componentWillMount() {
    this.loadAssetsAsync();
  }

  loadAssetsAsync = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <Text>Loading....</Text>;
    }

    return (
      <Container>
        <AppNavigator />
      </Container>
    );
  }
}
