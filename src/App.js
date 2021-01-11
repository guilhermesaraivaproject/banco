import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Extrato from './screens/Extrato';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const Drawer = createDrawerNavigator();

export default function App(props) {
  return (
    <PaperProvider>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name="Home" component={Home} initialParams={{ navigateRoot: props.navigation }}/>
          <Drawer.Screen name="Extrato" component={Extrato} initialParams={{ navigateRoot: props.navigation }}/>
        </Drawer.Navigator>
    </PaperProvider>
  );
}