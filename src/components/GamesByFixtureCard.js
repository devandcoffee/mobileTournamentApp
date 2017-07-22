import React from 'react';
import {
  Body,
  Card,
  CardItem,
  List,
  ListItem,
  Text
} from 'native-base';

import styles from '../styles/Styles';
import { GameRow } from './GameRow';

export default class GamesByFixtureCard extends React.Component {
  renderGameRow(game, sectionID, rowID) {
    return (
      <ListItem 
        button //onPress={() =>   }}
      >
        <GameRow game={game} /> 
      </ListItem>
    );
  }

  render() {
    const { games } = this.props;
    return (
        <Card>
          <CardItem header>
            <Body style={gamesByFixtureStyles.leftHeaderSection} >
              <Text>Llave 1</Text>
            </Body>
            <Body style={gamesByFixtureStyles.rightHeaderSection} >
              <Text>Octavos</Text>
            </Body>
          </CardItem>
          <List 
            listStyle={styles.listView} 
            dataArray={games} 
            renderRow={this.renderGameRow.bind(this)}
          />
        </Card>
    );
  }
}

let gamesByFixtureStyles = {
  leftHeaderSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightHeaderSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
}
