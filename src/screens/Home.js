import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native'
import CardBanco from "../components/CardBanco"
import Appbar from "../components/Appbar";

import { Avatar } from 'react-native-paper';

export default props => {

    const irPagina = pagina => {
      props.navigation.navigate(pagina)
    }

    const irPaginaRoot = pagina => {
      props.route.params.navigateRoot.push('NovoDeposito')
    }
    return (
      <SafeAreaView style={style.App}>
        <Appbar navigation={props.navigation} titulo='Home' subTitulo='' />
        <View style={style.contentUp}>
          <View style={style.contentUpLeft}>
            <Avatar.Text size={60} label="GS" style={{fontSize: 20, marginLeft:10, marginRight:10}} />
            <Text style={{fontSize: 20}}>Guilherme Guimarães Saraiva</Text>
          </View>
          <View style={style.contentUpRight}><Text style={{fontSize: 20, padding: 10}}>Saldo: R$ 10000,0</Text></View>
        </View>
        <View style={style.contentDown}>
          <CardBanco cor="#A64CA6" titulo="Deposito" desc="Ultimo Deposito" irPaginaRoot={irPaginaRoot} pagina="Deposito"/>
          <CardBanco cor="#66B266" titulo="Extrato" desc="" irPagina={irPagina} pagina="Extrato" />
          <CardBanco cor="#FFEB7F" titulo="Transferência" desc="" irPaginaRoot={irPaginaRoot} pagina="Deposito" />
        </View>
        
      </SafeAreaView>
    )
    }

const style = StyleSheet.create({
    App: {
      flexGrow: 1
    },
    contentUp: {
      width: '100%',
      flexGrow: 2,
      backgroundColor: "#F0F0F0",
      justifyContent: 'center',
    },
    contentDown: {
      flexGrow: 8,
      backgroundColor: "#FFFFFF",
      padding: 10
    },
    contentUpLeft: {
      flexGrow: 5,
      flexDirection: 'row',
      justifyContent: "flex-start",
      alignItems: "center",
    },
    contentUpRight: {
      flexGrow: 5,
      justifyContent: "flex-end",
      alignItems: "flex-end",
    } 
})