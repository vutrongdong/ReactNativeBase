import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigatorFooter from './src/commons/components/tabNavigatorFooter';
import store from './src/reducers/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store = { store }>
        <NavigationContainer>
            <TabNavigatorFooter/>
        </NavigationContainer>
    </Provider>
  );
}

export default App;