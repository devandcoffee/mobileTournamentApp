import React from 'react';
import { StackNavigator } from 'react-navigation';

import TournamentListScreen from '../containers/TournamentListScreen';
import TournamentDetailNav from '../containers/TournamentDetailNav';
import Toolbar from '../presentationals/Toolbar';

const routeConfiguration = {
  TournamentList: {
    screen: TournamentListScreen,
    navigationOptions: ({navigation}) => ({
        header: (
          <Toolbar navigation={navigation} title="Tournaments" leftButtonIcon="menu" rightButtonIcon="search"/>
        )
    })
  },
  TournamentDetail: {
    screen: TournamentDetailNav,
    navigationOptions: ({navigation}) => ({
        header: (
          <Toolbar navigation={navigation} title={`${navigation.state.params.title} tournament`} leftButtonIcon="arrow-back"/>
        )
    })
  }
}

export default TournamentNavConfig = StackNavigator(routeConfiguration);
