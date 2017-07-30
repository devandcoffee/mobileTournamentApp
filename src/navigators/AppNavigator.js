import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import DashboardScreen from '../components/dashboard/DashboardScreen';
import { TournamentNavigator } from './Tournaments';
import LeftMenu from '../components/LeftMenu';

const routeConfiguration = {
  Dashboard: { screen: DashboardScreen },
  Tournament: { screen: TournamentNavigator }
};

const drawerConfiguration = {
  backBehavior: true,
  contentComponent: props => <LeftMenu {...props} />
};

const AppNavigator = DrawerNavigator(routeConfiguration, drawerConfiguration);

export default AppNavigator;
