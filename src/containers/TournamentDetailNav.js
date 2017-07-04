import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import TournamentDetailNavConfig from '../navigators/TournamentDetailNavConfig';

const mapStateToProps = (state) => {
  return {
    navigationState: state.tournamentDetailNav
  }
}

class TournamentDetailNav extends React.Component {
  render(){
    const { navigation, dispatch, navigationState } = this.props;
    console.log('TournamentDetailNavigation', this.props);
    //navigationState.state = Object.assign(navigationState, navigation.state.params);
    console.log('navigationState', navigationState);
    return(
      <TournamentDetailNavConfig
        navigation=
        {
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TournamentDetailNav);
