import React from 'react';
import { Container, Text } from 'native-base';
import { Font } from 'expo';
import { Provider } from 'react-redux';

import store from './src/store';
import AppNav from './src/containers/AppNav';

export default class App extends React.Component {
  state = {
    loaded: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
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
      <Provider store={store}>
        <Container
          style={{
            paddingTop: 22
          }}>
          <AppNav />
        </Container>
      </Provider>
    );
  }
}
