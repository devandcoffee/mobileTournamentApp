import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import {
  Content,
} from 'native-base';
import generalStyles from '../../styles/Styles';

const BasicRow = (props) => (
  <Content>
    <Text style={styles.title}>{props.mainText}</Text>
    <Text style={styles.year}>{props.secondaryText}</Text>
  </Content>
);

const basicRowStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  }
});

const styles = { ...generalStyles, ...basicRowStyles };

export default BasicRow;
