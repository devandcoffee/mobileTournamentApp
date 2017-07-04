import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import TournamentNavConfig from '../navigators/TournamentNavConfig';

class TournamentNav extends React.Component {
  render(){
    const { dispatch, navigationState } = this.props;
    return(
      <TournamentNavConfig
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navigationState: state.tournamentNav
  }
}

export default connect(mapStateToProps)(TournamentNav);
