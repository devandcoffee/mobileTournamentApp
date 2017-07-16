import React from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';

import Toolbar from '../Toolbar';
import styles from '../../styles/Styles';

export default class DashboardScreen extends React.Component {
   render() {
    return (
      <Container>
        <Toolbar 
          navigation={this.props.navigation} 
          title="Dashboard" 
          leftButtons={[
            {
              icon: 'menu',
              action: () => { this.props.navigation.navigate('DrawerOpen'); }
            }            
          ]}
        />
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
