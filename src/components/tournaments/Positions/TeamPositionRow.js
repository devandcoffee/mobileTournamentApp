import React from 'react';
import {
  Body,
  Text,
  Thumbnail,
} from 'native-base';

export const TeamPositionRow = (props) => {
  const { teamPositionInfo } = props;
  return (
    <Body style={teamPositionStyles.container}>
      <Body style={teamPositionStyles.leftSection}>
        <Text style={teamPositionStyles.teamPosition}>{teamPositionInfo.position}</Text>
        <Thumbnail
          square
          small
          style={teamPositionStyles.teamImage}
          source={{ uri: 'http://www.soyboca.com.ar/images/escudo-boca-juniors.png' }}
        />
        <Text style={teamPositionStyles.teamName}>{teamPositionInfo.name}</Text>
      </Body>
      <Body style={teamPositionStyles.rightSection}>
        <Text style={teamPositionStyles.rightSectionText}>{teamPositionInfo.played}</Text>
        <Text style={teamPositionStyles.rightSectionText}>{teamPositionInfo.won}</Text>
        <Text style={teamPositionStyles.rightSectionText}>{teamPositionInfo.drawn}</Text>
        <Text style={teamPositionStyles.rightSectionText}>{teamPositionInfo.lost}</Text>
        <Text style={teamPositionStyles.goalsText}>{teamPositionInfo.goals}</Text>
        <Text style={teamPositionStyles.pointsText}>{teamPositionInfo.points}</Text>
      </Body>       
    </Body>              
  );
}

let teamPositionStyles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  leftSection: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 5,
  },
  rightSection: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },  
  teamPosition: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto_medium',    
    fontSize: 12,
    textAlign: 'center',
  },
  teamImage: {
    flex: 3,
  },
  teamName: {
    flex: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto', 
    fontSize: 12,
    marginLeft: 5,    
  },
  rightSectionText: {
    flex: 1,
    textAlign: 'center',
    marginRight: 3,
    fontFamily: 'Roboto',    
    fontSize: 12,
  },
  goalsText: {
    flex: 2,
    textAlign: 'center',
    marginRight: 3,
    fontFamily: 'Roboto',    
    fontSize: 12,
  },
  pointsText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto_medium',
    fontSize: 12,
  }
}
