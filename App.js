import { enableScreens } from 'react-native-screens';
import React from 'react';
import MainStackNavigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default function App () {
  enableScreens()

  return (
    <Provider store={Store}>
      <MainStackNavigation />
    </Provider>
  );
}