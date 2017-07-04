import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import AppNavConfig from './navigators/AppNavConfig';
import TournamentNavConfig from './navigators/TournamentNavConfig';
import TournamentDetailNavConfig from './navigators/TournamentDetailNavConfig';

//Middleware
const middleware = () => applyMiddleware(createLogger());

const rootReducer = combineReducers(
  {
    appNavigator: (state, action) => AppNavConfig.router.getStateForAction(action, state),
    tournamentNav: (state, action) => TournamentNavConfig.router.getStateForAction(action, state),
    tournamentDetailNav: 
      (state, action) => TournamentDetailNavConfig.router.getStateForAction(action, state),
  }
);

export default createStore(rootReducer, middleware());
