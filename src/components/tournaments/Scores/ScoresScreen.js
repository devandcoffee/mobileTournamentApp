import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import { TournamentList } from '../TournamentList';

class ScoresScreen extends Component {
  render() {
    //const { id, title } = this.props.navigation.state.params;
    const list = [
      {
        position: 1,
        image: 'http://www.soyboca.com.ar/images/escudo-boca-juniors.png',
        teamName: 'Boca juniots',
        jugados: 5,
        cabeza: 3,
        tiroLibre: 0,
        penales: 1,
        total: 4
      },
      {
        position: 1234,
        image: 'http://www.soyboca.com.ar/images/escudo-boca-juniors.png',
        teamName: 'Boca Juniors aasdasdasd adasdasdasdasda',
        jugados: 1234,
        cabeza: 1233,
        tiroLibre: 1234,
        penales: 1234,
        total: 1234
      }
    ];

    return (
      <Container>
        <Content style={{ padding: 10 }}>
          <TournamentList
            dataSource={list}
            leftColumns={['position', 'image', 'teamName']}
            rightColumns={['jugados', 'cabeza', 'tiroLibre', 'penales', 'total']}
          />
        </Content>
      </Container>
    );
  }
}

export default ScoresScreen;
