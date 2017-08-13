import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import { TournamentList } from '../TournamentList';

export default class PositionsScreen extends Component {
  render() {
    const tournamentPositions = [
      {
        position: '333',
        image: 'http://www.soyboca.com.ar/images/escudo-boca-juniors.png',
        teamName: 'Boca Juniors aa adsa asdada asda aaa a sdsaa asdas',
        played: '300',
        won: '300',
        draw: '020',
        lost: '022',
        goals: '20005',
        points: '900'
      }
    ];

    return (
      <Container>
        <Content style={{ padding: 10 }}>
          <TournamentList
            dataSource={tournamentPositions}
            leftColumns={['position', 'image', 'teamName']}
            rightColumns={['played', 'won', 'draw', 'lost', 'goals', 'points']}
          />
        </Content>
      </Container>
    );
  }
}
