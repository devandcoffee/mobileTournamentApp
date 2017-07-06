import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from '../../styles/Styles';

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
