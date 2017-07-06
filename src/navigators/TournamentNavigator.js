import React from 'react';
import { StackNavigator } from 'react-navigation';

import TournamentListScreen from '../components/tournaments/TournamentListScreen';
import TournamentDetailNavigator from './TournamentDetailNavigator';
import Toolbar from '../components/Toolbar';

const routeConfiguration = {
  TournamentList: {
    screen: TournamentListScreen,
    navigationOptions: ({ navigation }) => ({
        header: (
          <Toolbar 
            navigation={navigation} 
            title="Tournaments" leftButtonIcon="menu" rightButtonIcon="search" 
          />
        )
    })
  },
  TournamentDetail: {
    screen: TournamentDetailNavigator,
    navigationOptions: ({ navigation }) => ({
        header: (
          <Toolbar 
            navigation={navigation} 
            title={`${navigation.state.params.title} tournament`} leftButtonIcon="arrow-back"
          />
        )
    })
  }
};

export default TournamentNavigator = StackNavigator(routeConfiguration);
