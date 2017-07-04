import React, { Component } from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';
import { NavigationActions } from 'react-navigation';

import styles from '../Styles';

export default class PositionsScreen extends Component{
   render(){
    return(
      <Container>
        <Content>
          <Text>
            POSICIONES
          </Text>
        </Content>
      </Container>
    );
  }
}
