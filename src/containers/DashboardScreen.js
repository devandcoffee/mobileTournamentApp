import React from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';

import Toolbar from '../presentationals/Toolbar';
import styles from '../Styles';

export default class DashboardScreen extends React.Component{
   render(){
    return(
      <Container>
        <Toolbar  navigation={this.props.navigation} title="Dashboard" leftButtonIcon="menu"/>
        <Content contentContainerStyle={styles.container}>
          <Text style={{ fontFamily: 'Roboto' }}>
            Dashboard Light
          </Text>
          <Text style={{ fontFamily: 'Roboto_medium' }}>
            Dashboard Medium
          </Text>
        </Content>
      </Container>
    );
  }
}
