import React from 'react';
import { Container, Content, List } from 'native-base';

import { PlayerRow } from './PlayerRow';

class PlayersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          profilePicture:
            'http://i2.cdn.turner.com/cnn/2009/SPORT/football/05/22/messi.football.best.world/art.messi.profile.gi.jpg',
          name: 'Dani',
          age: '26',
          number: '5',
          position: 'Mediocampista'
        },
        {
          profilePicture:
            'http://i2.cdn.turner.com/cnn/2009/SPORT/football/05/22/messi.football.best.world/art.messi.profile.gi.jpg',
          name: 'Dani',
          age: '26',
          number: '5',
          position: 'Mediocampista'
        },
        {
          profilePicture:
            'http://i2.cdn.turner.com/cnn/2009/SPORT/football/05/22/messi.football.best.world/art.messi.profile.gi.jpg',
          name: 'Dani',
          age: '26',
          number: '5',
          position: 'Mediocampista'
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={this.state.players}
            renderRow={player => <PlayerRow player={player} />}
          />
        </Content>
      </Container>
    );
  }
}

export default PlayersScreen;
