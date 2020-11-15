import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import Pay from './screens/Pay'
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  })

const AppContainer =  createAppContainer(switchNavigator);