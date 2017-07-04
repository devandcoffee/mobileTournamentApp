import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from '../Styles';

export default class FixtureScreen extends React.Component{
   render(){
     console.log('props', this.props);
    return(
      <View style={ styles.container }>
        <Text>
          FIXTURE
        </Text>
      </View>
    );
  }
}
