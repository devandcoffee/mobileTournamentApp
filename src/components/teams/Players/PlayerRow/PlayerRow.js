import React from 'react';
import { Body, Text, ListItem, Thumbnail } from 'native-base';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';
import { Styles as GeneralStyles } from '../../../../styles';

const PlayerRow = props => {
  const { player } = props;

  return (
    <ListItem>
      <Thumbnail
        square
        size={80}
        source={{
          uri: player.profilePicture
        }}
      />
      <Body>
        <View style={GeneralStyles.flexRow}>
          <View style={Styles.mainInfoContainer}>
            <Text style={Styles.mainPlayerInfo}>
              {player.name}
            </Text>
            <Text note style={Styles.secondaryPlayerInfo}>
              {player.position}
            </Text>
          </View>
          <View style={Styles.secondaryInfoContainer}>
            <View style={GeneralStyles.flexRow}>
              <Text note style={Styles.secondaryPlayerInfo}>
                Age: {player.age}
              </Text>
            </View>
            <View style={GeneralStyles.flexRow}>
              <Text note style={Styles.secondaryPlayerInfo}>
                Number: {player.number}
              </Text>
            </View>
          </View>
        </View>
      </Body>
    </ListItem>
  );
};

PlayerRow.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerRow;
