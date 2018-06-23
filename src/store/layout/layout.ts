import {
  AnyAction,
  Reducer,
} from 'redux';
import {
  LAYOUT_TYPE_HAS_CHANGED,
  LayoutTypeHasChanged,
} from './actions/layout-type-has-changed';

export type DeviceType = 'mobile' | 'laptop' | 'desktop';

export interface LayoutState {
  deviceType: DeviceType;
}

const initialState: LayoutState = {
  deviceType: 'desktop',
}

export const layoutReducer: Reducer<LayoutState, AnyAction> = (state, action) => {

  if (state === undefined) {
    return {
      ...initialState,
    }
  }

  switch (action.type) {
    case LAYOUT_TYPE_HAS_CHANGED:
      const actionCasted = action as LayoutTypeHasChanged;
      return {
        ...state,
        deviceType: actionCasted.payload.newLayoutType,
      }

    default:
      return {
        ...state,
      }

  }
}