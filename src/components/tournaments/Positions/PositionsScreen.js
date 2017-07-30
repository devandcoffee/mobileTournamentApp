import React, { Component } from 'react';
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  List,
  ListItem,
  Text,  
} from 'native-base';

import { TeamPositionRow } from './TeamPositionRow';

export default class PositionsScreen extends Component {
  renderTeamPositionRow(teamPositionInfo) {
    return (
      <ListItem>
        <TeamPositionRow teamPositionInfo={teamPositionInfo} />
      </ListItem>
    )
  }
  
  render() {
     const teamsPosition = [
       {
           name: 'Boca Juniors aa adsa asdada asda aaa a sdsaa asdas',
           position: '333',        
           played: '300',
           won: '300',
           drawn: '020',
           lost: '022',
           goals: '200/0',
           points: '900',
       }, 
       {
           name: 'Boca Juniors aaaaaaaaaaaaaaa',
           position: '2',        
           played: '30',
           won: '30',
           drawn: '0',
           lost: '0',
           goals: '200/0',
           points: '90',
       },
       {
           name: 'Boca Juniors',
           position: '3',        
           played: '30',
           won: '30',
           drawn: '0',
           lost: '0',
           goals: '200/00',
           points: '90',
       },
     ]
     return (
      <Container>
        <Content style={{ padding: 10 }}>
          <Card>
            <CardItem header>
              <Body style={positionStyles.headerLeftSection}>
                <Text style={positionStyles.positionTitle}>Position</Text>
              </Body>
              <Body style={positionStyles.headerRightSection}>
                <Text style={positionStyles.rightSectionText}>P</Text>
                <Text style={positionStyles.rightSectionText}>W</Text>
                <Text style={positionStyles.rightSectionText}>D</Text>
                <Text style={positionStyles.rightSectionText}>L</Text>
                <Text style={positionStyles.goalsText}>GF/GA</Text>
                <Text style={positionStyles.rightSectionText}>PTS</Text>
              </Body>              
            </CardItem>  
            <List
              dataArray={teamsPosition}
              renderRow={this.renderTeamPositionRow.bind(this)}
            />                   
          </Card>
        </Content>
      </Container>
    );
  }
}

let positionStyles = {
  headerLeftSection: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  headerRightSection: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  positionTitle: {
    textAlign: 'left',
    fontFamily: 'Roboto',    
    fontSize: 14
  },
  rightSectionText: {
    flex: 1,
    textAlign: 'center',
    marginRight: 3,
    fontFamily: 'Roboto',    
    fontSize: 12,
  },
  ctionText: {
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
}
