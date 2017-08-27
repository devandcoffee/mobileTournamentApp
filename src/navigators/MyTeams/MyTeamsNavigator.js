import React from 'react';
import { StackNavigator } from 'react-navigation';

import { TeamListScreen } from '../../components/teams';
import MyTeamDetailNavigator from './MyTeamDetailNavigator';
import { Toolbar } from '../../components/shared';

const routeConfiguration = {
  MyTeamsList: {
    screen: TeamListScreen
  },
  MyTeamDetail: {
    screen: MyTeamDetailNavigator,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Toolbar
          navigation={navigation}
          title={`${navigation.state.params.title} tournament`}
          leftButtons={[
            {
              icon: 'arrow-back',
              action: () => {
                navigation.goBack();
              }
            }
          ]}
          rightButtons={[
            {
              icon: 'calendar',
              action: () => {
                navigation.goBack();
              }
            }
          ]}
        />
      )
    })
  }
};

const MyTeamNavigator = StackNavigator(routeConfiguration, { initialRouteName: 'MyTeamsList' });

export default MyTeamNavigator;
