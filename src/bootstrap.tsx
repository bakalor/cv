import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { App } from 'app';
import { store } from 'store';
import { DeviceLayoutMonitor } from 'services';


const render = (Component: any) =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter >
    </Provider>,
    document.getElementById('app')
  );

new DeviceLayoutMonitor().run();

render(App);
declare var module: any;

if (module.hot) {
  module.hot.accept('./app.tsx', () => {
    const AppComponent = require('./app.tsx').App;
    render(AppComponent);
  });
}
