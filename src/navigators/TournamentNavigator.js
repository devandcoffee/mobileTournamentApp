import React from 'react';
import { StackNavigator } from 'react-navigation';

import TournamentListScreen from '../components/tournaments/TournamentListScreen';
import TournamentDetailNavigator from './TournamentDetailNavigator';
import Toolbar from '../components/Toolbar';

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

export default TournamentNavigator = StackNavigator(routeConfiguration);
