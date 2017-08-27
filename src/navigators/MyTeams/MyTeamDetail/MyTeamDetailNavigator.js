import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Text, Thumbnail } from 'native-base';

import { FixtureScreen } from '../../../components/shared';
import { PlayersScreen } from '../../../components/teams';
import Styles from './Styles';

const routeConfiguration = {
  Fixture: {
    screen: FixtureScreen
  },
  Players: {
    screen: PlayersScreen
  }
};

const tabBarConfiguration = {
  initialRouteName: 'Fixture',
  backBehavior: true,
  tabBarPosition: 'top',
  tabBarComponent: props => {
    const { id, title } = props.navigation.state.params;
    return (
      <Footer style={{ height: 125 }}>
        <View style={{ flex: 1 }}>
          <View style={Styles.teamInfoContainer}>
            <View style={Styles.teamLogoContainer}>
              <Thumbnail
                style={Styles.teamLogo}
                square
                source={{ uri: 'http://www.soyboca.com.ar/images/escudo-boca-juniors.png' }}
              />
            </View>
            <View style={Styles.teamMainInfo}>
              <Text style={{ flex: 1 }}>Boca Juniors</Text>
              <Text style={{ flex: 1 }}>Delegado</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
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
              <Button
                vertical
                active={props.navigationState.index === 1}
                onPress={() => {
                  props.navigation.navigate('Players', { id, title });
                }}
              >
                <Text>Players</Text>
              </Button>
            </FooterTab>
          </View>
        </View>
      </Footer>
    );
  }
};

const MyTeamDetailNavigator = TabNavigator(routeConfiguration, tabBarConfiguration);
export default MyTeamDetailNavigator;
