import React from 'react';
import { StackNavigator } from 'react-navigation';

import { TournamentListScreen } from '../../components/tournaments';
import TournamentDetailNavigator from './TournamentDetailNavigator';
import { Toolbar } from '../../components/shared';

const routeConfiguration = {
  TournamentList: {
    screen: TournamentListScreen
  },
  TournamentDetail: {
    screen: TournamentDetailNavigator,
    navigationOptions: ({ navigation }) => ({
        header: (
          <Toolbar 
            navigation={navigation} 
            title={`${navigation.state.params.title} tournament`} 
            leftButtons={[
              {
                icon: 'arrow-back',
                action: () => { navigation.goBack(); }
              }
            ]}
            rightButtons={[
              {
                icon: 'calendar',
                action: () => { navigation.goBack(); }
              }
            ]}
          />
        )
    })
  }
};

const TournamentNavigator = StackNavigator(
  routeConfiguration, 
  { initialRouteName: 'TournamentList' }
);

export default TournamentNavigator;
