import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import App from './App';
import NovoDeposito from './screens/NovoDeposito';
import DetalheTransacao from './screens/DetalheTransacao';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{ headerShown: false }} name="App" component={App} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="NovoDeposito" component={NovoDeposito} />
        <Stack.Screen options={{ headerShown: false }} name="DetalheTransacao" component={DetalheTransacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
