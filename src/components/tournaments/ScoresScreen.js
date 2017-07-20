import React, { Component } from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';

//import styles from '../../styles/Styles';

export default class ScoresScreen extends Component{
   render() {
     const { id, title } = this.props.navigation.state.params;
     return (
       <Container>
         <Content>
           <Text>
             {id}
           </Text>
           <Text>
             {title}
           </Text>
         </Content>
       </Container>
    );
  }
}
