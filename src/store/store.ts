import {
  combineReducers,
  createStore,
  AnyAction,
} from 'redux';

import {
  composeWithDevTools,
} from 'redux-devtools-extension';

import {
  layoutReducer,
  LayoutState,
} from './layout/layout';

export interface AppState {
  layout: LayoutState;
}
const appReducer = combineReducers({
  layout: layoutReducer
});

export const store = createStore<AppState, AnyAction, {}, {}>(
  appReducer,
  composeWithDevTools(),
);
