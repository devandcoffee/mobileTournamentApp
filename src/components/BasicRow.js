import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import {
  Content,
} from 'native-base';
import generalStyles from '../styles/Styles';

export const BasicRow = (props) => {

  return (
      <Content>
          <Text style={styles.title}>{props.mainText}</Text>
          <Text style={styles.year}>{props.secondaryText}</Text>
      </Content>
  );
}

var basicRowStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  }
});

var styles = { ...generalStyles, ...basicRowStyles};
