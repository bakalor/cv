import {
  DeviceType,
  store,
  layoutTypeHasChanged,
} from 'store';

const DESKTOP_SIDE_MARGIN = 20;
const PROFILE_CARD_DESKTOP_WIDTH = 940;
const SIDEBAR_WIDTH = 256;

const DESKTOP_LAYOUT_WIDTH_CONDITION = PROFILE_CARD_DESKTOP_WIDTH + 2 * DESKTOP_SIDE_MARGIN + SIDEBAR_WIDTH;
const MOBILE_LAYOUT_WIDTH_CONDITION = 420;

const desktop = window.matchMedia(
  `only screen and (min-width: ${DESKTOP_LAYOUT_WIDTH_CONDITION}px)`
);
const desktopNoSidebar = window.matchMedia(
  `only screen and (max-width: ${DESKTOP_LAYOUT_WIDTH_CONDITION - 1}px)`
);
const mobile = window.matchMedia(
  `only screen and (max-width: ${MOBILE_LAYOUT_WIDTH_CONDITION}px)`
);

const queries = [
  mobile,
  desktopNoSidebar,
  desktop,
];

const queryToDeviceType = new Map<MediaQueryList, DeviceType>([
  [
    desktop,
    'desktop',
  ],
  [
    desktopNoSidebar,
    'laptop',
  ],
  [
    mobile,
    'mobile',
  ],
]);

export class DeviceLayoutMonitor {

  run() {
    const activeMedia = queries.find(query => query.matches)!;
    activeMedia.addListener(() => this.handleScreenDimensionsChange());
    const activeDeviceType = queryToDeviceType.get(activeMedia)!;

    store.dispatch(layoutTypeHasChanged(activeDeviceType));
  }

  private handleScreenDimensionsChange() {
    const activeQuery = queries.find(query => query.matches)!;
    const activeDeviceType = queryToDeviceType.get(activeQuery)!;

    store.dispatch(layoutTypeHasChanged(activeDeviceType));
  }


}
