import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Footer,
  FooterTab,
  Button,
  Text
} from 'native-base';

import { FixtureScreen, PositionsScreen, ScoresScreen } from '../../components/tournaments';

const routeConfiguration = {
    Fixture: {
      screen: FixtureScreen
    },
    Positions: {
      screen: PositionsScreen
    },
    Scores: {
      screen: ScoresScreen
    }
};

const tabBarConfiguration = {
  initialRouteName: 'Fixture',
  backBehavior: true,
  tabBarPosition: 'top',
  tabBarComponent: props => {
    console.log('tournamentDetailnavConfigProps', props);
    const { id, title } = props.navigation.state.params;
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => {
              props.navigation.navigate('Fixture', { id, title });
            }}
          >
            <Text>Fixture</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 1}
            onPress={() => {
              props.navigation.navigate('Positions', { id, title });
            }}
          >
            <Text>Positions</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate('Scores', { id, title })}
          >
            <Text>Scores</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
};

const TournamentDetailNavigator = TabNavigator(routeConfiguration, tabBarConfiguration);
  
export default TournamentDetailNavigator;
