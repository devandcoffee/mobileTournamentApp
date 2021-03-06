import React from 'react';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
} from 'native-base';

import GamesByFixtureCard from './GamesByFixtureCard';

export default class FixtureScreen extends React.Component {
  renderGamesByFixtureCard = (gamesByFixture) => {
    return (
      <ListItem 
        button //onPress={() =>   }}
      >
        <GamesByFixtureCard games={gamesByFixture.games} />
      </ListItem>
    );
  }
  
  render() {
    const { id, title } = this.props.navigation.state.params;
     const gamesByFixture = [
       {
         games: [
           { localTeamName: 'Boca Juniors', visitorTeamName: 'Godoy Cruz', llave: '1' }, 
           { localTeamName: 'Godoy Cruz', visitorTeamName: 'Boca Juniors', llave: '1' },  
         ]
       },
       {
         games: [
           { localTeamName: 'Independiente', visitorTeamName: 'Racing', date: 'Martes' }, 
           { localTeamName: 'Godoy Cruz', visitorTeamName: 'Boca Juniors', date: 'Miercoles' },
         ]
       }
     ];     
     return (
       <Container>
         <Content style={{ padding: 10 }}>
           <Text>
             {id}
           </Text>
           <Text>
             {title}
           </Text>
           <List 
             dataArray={gamesByFixture} 
             renderRow={item => this.renderGamesByFixtureCard(item)}
           />           
         </Content>
       </Container>
    );
  }
}
