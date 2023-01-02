/**
 * @format
 */
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App.tsx';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor, combinedStore} from './store';
const RNRedux = () => (
  <Provider store={combinedStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
