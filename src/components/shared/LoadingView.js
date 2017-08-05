import React from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from '../../styles/Styles';

const LoadingView = (props) => (
  <View style={styles.container}>
    <Text>
      { props.text }
    </Text>
  </View>
);

export default LoadingView;
