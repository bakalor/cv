import {
  AnyAction,
} from 'redux';

import { DeviceType } from '../layout';

export const LAYOUT_TYPE_HAS_CHANGED = '@layout/LAYOUT_TYPE_HAS_CHANGED'

export interface LayoutTypeHasChanged extends AnyAction {
  payload: {
    newLayoutType: DeviceType,
  },
}

export type LayoutTypeHasChangedCreator = (newLayoutType: DeviceType) => LayoutTypeHasChanged;

export const layoutTypeHasChanged: LayoutTypeHasChangedCreator =
  (newLayoutType) => ({
    type: LAYOUT_TYPE_HAS_CHANGED,
    payload: {
      newLayoutType,
    }
  });