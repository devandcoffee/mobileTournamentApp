import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Text } from 'native-base';

import { FixtureScreen } from '../../components/shared';

const routeConfiguration = {
  Fixture: {
    screen: FixtureScreen
  }
  // Players: {
  //   screen: Players
  // },
};

const tabBarConfiguration = {
  initialRouteName: 'Fixture',
  backBehavior: true,
  tabBarPosition: 'top',
  tabBarComponent: props => {
    const { id, title } = props.navigation.state.params;
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => {
              props.navigation.navigate('Fixture', { id, title });
            }}
          >
            <Text>Fixture</Text>
          </Button>
          {/* <Button
            vertical
            active={props.navigationState.index === 1}
            onPress={() => {
              props.navigation.navigate('Players', { id, title });
            }}
          >
            <Text>Players</Text>
          </Button> */}
        </FooterTab>
      </Footer>
    );
  }
};

const MyTeamDetailNavigator = TabNavigator(routeConfiguration, tabBarConfiguration);
export default MyTeamDetailNavigator;
