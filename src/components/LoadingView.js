import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from '../styles/Styles';

export const LoadingView = (props) => (
  <View style={ styles.container }>
    <Text>
      { props.text }
    </Text>
  </View>
)
