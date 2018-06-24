import {
  AnyAction,
} from "redux";

export const CLOSE_SIDEBAR = '@layout/CLOSE_SIDEBAR';

export type CloseSidebarCreator = () => AnyAction;

export const closeSidebar: CloseSidebarCreator = () => ({ type: CLOSE_SIDEBAR });