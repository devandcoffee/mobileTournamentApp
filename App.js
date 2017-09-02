import React from 'react';
import { Font } from 'expo';
import { Container, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

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
      Roboto: require('native-basme/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <Text>Loading....</Text>;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <AppNavigator />
        </Container>
      </StyleProvider>
    );
  }
}
