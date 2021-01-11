import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

export default props => {

    const backFunction = () => {
        if (props.backFunc) {
            props.navigation.goBack()
        } else {
            props.navigation.dispatch(DrawerActions.toggleDrawer())
        }
    }
    
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={backFunction} />
            <Appbar.Content title={props.titulo} subtitle={props.subTitulo} />
      </Appbar.Header>
    )
}
