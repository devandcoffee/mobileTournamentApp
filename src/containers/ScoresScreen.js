import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from '../Styles';

export default class ScoresScreen extends Component{
   render(){
    return(
      <View style={styles.container}>
        <Text>
          GOLEADORES
        </Text>
      </View>
    );
  }
}
