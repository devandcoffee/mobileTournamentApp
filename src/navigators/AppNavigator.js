import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import { DashboardScreen } from '../components/dashboard';
import { TournamentNavigator } from './Tournaments';
import { MyTeamsNavigator } from './MyTeams';
import { LeftMenu } from '../components/shared/';

const routeConfiguration = {
  Dashboard: { screen: DashboardScreen },
  Tournament: { screen: TournamentNavigator },
  MyTeams: { screen: MyTeamsNavigator }
};

const drawerConfiguration = {
  backBehavior: true,
  contentComponent: props => <LeftMenu {...props} />
};

const AppNavigator = DrawerNavigator(routeConfiguration, drawerConfiguration);

export default AppNavigator;
