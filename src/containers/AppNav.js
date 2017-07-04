import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import AppNavConfig from '../navigators/AppNavConfig';

class AppNav extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <AppNavConfig 
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigationState: state.appNavigator,
  };
}

export default connect(mapStateToProps)(AppNav);
