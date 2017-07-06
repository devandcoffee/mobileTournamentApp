import React from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from '../../styles/Styles';

export default class FixtureScreen extends React.Component {
   render() {
     console.log('props', this.props);
    return (
      <View style={styles.container}>
        <Text>
          FIXTURE
        </Text>
      </View>
    );
  }
}
