import {
  DeviceType,
  store,
  layoutTypeHasChanged,
} from 'store';

const desktop = window.matchMedia(`only screen and (min-width: 981px)`);
const laptop = window.matchMedia(`only screen and (max-width: 980px)`);
const mobile = window.matchMedia(`only screen and (max-width: 420px)`);

const queries = [
  mobile,
  laptop,
  desktop,
];

const queryToDeviceType = new Map<MediaQueryList, DeviceType>([
  [
    desktop,
    'desktop',
  ],
  [
    laptop,
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
