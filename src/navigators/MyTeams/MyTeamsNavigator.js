//import React from 'react';
import { StackNavigator } from 'react-navigation';

import { TeamListScreen } from '../../components/teams';

const routeConfiguration = {
  MyTeamsList: {
    screen: TeamListScreen
  }
};

const MyTeamNavigator = StackNavigator(routeConfiguration, { initialRouteName: 'MyTeamsList' });

export default MyTeamNavigator;
