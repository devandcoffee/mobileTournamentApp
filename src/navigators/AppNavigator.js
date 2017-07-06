import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import DashboardScreen from '../components/dashboard/DashboardScreen';
import TournamentNavigator from '../navigators/TournamentNavigator';
import LeftMenu from '../components/LeftMenu';

const routeConfiguration = {
  Dashboard: { screen: DashboardScreen },
  Tournament: { screen: TournamentNavigator }
};

const drawerConfiguration = {
  backBehavior: true,
  contentComponent: props => <LeftMenu {...props} />
};

export default AppNavigator = DrawerNavigator(routeConfiguration, drawerConfiguration);
