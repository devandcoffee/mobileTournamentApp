import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Footer,
  FooterTab,
  Button,
  Text
} from 'native-base';


import FixtureScreen from '../components/tournaments/FixtureScreen';
import PositionsScreen from '../components/tournaments/PositionsScreen';
import ScoresScreen from '../components/tournaments/ScoresScreen';

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
}

const tabBarConfiguration = {
  backBehavior: true,
  tabBarPosition: 'top',
  tabBarComponent: props => {
    console.log('tournamentDetailnavConfigProps', props);
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => {
              props.navigation.navigate('Fixture')
            }}
          >
            <Text>Fixture</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 1}
            onPress={() => {
              props.navigation.navigate('Positions')
            }}
          >
            <Text>Positions</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate('Scores')}
          >
            <Text>Scores</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default TournamentDetailNavigator =
  TabNavigator(routeConfiguration, tabBarConfiguration);