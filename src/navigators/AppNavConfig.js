import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import DashboardScreen from '../containers/DashboardScreen';
import TournamentNav from '../containers/TournamentNav';
import LeftMenu from '../containers/LeftMenu';

const routeConfiguration = {
  Dashboard: { screen: DashboardScreen },
  Tournament: { screen: TournamentNav }
}

const drawerConfiguration = {
  backBehavior: true,
  contentComponent: props => <LeftMenu { ...props } />
}

export default AppNavConfig =
  DrawerNavigator(routeConfiguration, drawerConfiguration);
