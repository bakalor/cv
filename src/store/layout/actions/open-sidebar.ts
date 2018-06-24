import {
  AnyAction,
} from "redux";

export const OPEN_SIDEBAR = '@layout/OPEN_SIDEBAR';

export type OpenSidebarCreator = () => AnyAction;

export const openSidebar: OpenSidebarCreator = () => ({ type: OPEN_SIDEBAR });