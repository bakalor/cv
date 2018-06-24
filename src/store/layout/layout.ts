import {
  AnyAction,
  Reducer,
} from 'redux';
import {
  LAYOUT_TYPE_HAS_CHANGED,
  LayoutTypeHasChanged,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
} from './actions';

export type DeviceType = 'mobile' | 'laptop' | 'desktop';

export interface LayoutState {
  deviceType: DeviceType;
  sidebarIsOpened: boolean;
}

const initialState: LayoutState = {
  deviceType: 'desktop',
  sidebarIsOpened: false,
}

export const layoutReducer: Reducer<LayoutState, AnyAction> = (state, action) => {

  if (state === undefined) {
    return {
      ...initialState,
    }
  }

  switch (action.type) {
    case LAYOUT_TYPE_HAS_CHANGED:
      action = action as LayoutTypeHasChanged;
      return {
        ...state,
        deviceType: action.payload.newLayoutType,
      }

    case OPEN_SIDEBAR:
      return {
        ...state,
        sidebarIsOpened: true,
      }

    case CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarIsOpened: false,
      }

    default:
      return {
        ...state,
      }

  }
}