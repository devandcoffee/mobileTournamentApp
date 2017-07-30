import React from 'react';
import {
  Body,
  Text,
  Thumbnail,
} from 'native-base';

export const GameRow = (props) => {
  const { game } = props;
  return (
    <Body style={gameRowStyles.container}>
      <Body style={gameRowStyles.localTeamSection}>
        <Thumbnail
          square
          small
          source={{ uri: 'http://www.soyboca.com.ar/images/escudo-boca-juniors.png' }}
        />
        <Text style={gameRowStyles.localTeamName}>
          {game.localTeamName}
        </Text>
      </Body>
      <Body style={gameRowStyles.gameDetailSection}>
        <Text style={gameRowStyles.topTextDetailSection}>Jue 25/02</Text>
        <Body style={gameRowStyles.gameResult}>
          <Text style={gameRowStyles.mainTextDetailSection}>1</Text>
          <Text style={gameRowStyles.mainTextDetailSection}>-</Text>
          <Text style={gameRowStyles.mainTextDetailSection}>1</Text>
        </Body>
        <Text style={gameRowStyles.bottomTextDetailSection}>Alberto J. Armando</Text>
      </Body>
      <Body style={gameRowStyles.visitorTeamSection}>      
        <Text style={gameRowStyles.visitorTeamName}>
          {game.visitorTeamName}
        </Text>
        <Thumbnail
          square
          small
          source={{ uri: 'http://www.soyboca.com.ar/images/escudo-boca-juniors.png' }}
        />
      </Body>
    </Body>
  ); 
}

let gameRowStyles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  localTeamSection: {    
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center' 
  },
  gameDetailSection: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  visitorTeamSection: {
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },
  localTeamName: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontFamily: 'Roboto',    
    fontSize: 14,
    marginLeft: 5,
  },
  visitorTeamName: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    marginRight: 5,
  },
  topTextDetailSection: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  mainTextDetailSection: {
    fontFamily: 'Roboto_medium',
    flexWrap: 'wrap',
  },
  bottomTextDetailSection: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  gameResult: {
    flexDirection: 'row',
     justifyContent: 'center',
      alignItems: 'center' 
  }
}
