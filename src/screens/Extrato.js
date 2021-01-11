import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Button, Text } from "react-native";
import Appbar from "../components/Appbar";
import axios from 'axios';
import moment from 'moment'
import 'moment/locale/pt-br';
import ExtratoItem from '../components/ExtratoItem';

export default props => {

    const [extrato, setExtrato] = useState([]);

    const navRoot = props.route.params.navigateRoot
    
    const getExt = () => {
        axios.get('http://10.0.2.2:3000/transacoes/listar')
        .then(function (response) {
            let extratos = []
            response.data.forEach(element => {
                console.log(element)
                const dataDone = moment(element["doneAt"]).locale('pt-br').format('DD/MM/YYYY hh:mm')
                extratos.push({
                    id: element["id"],
                    nome: element["nome"],
                    valor: element["valor"],
                    doneAt: dataDone,
                    agencia: element["agencia"],
                    conta: element["conta"],
                    tipo: element["tipo"],
                    imgRef: element["imgRef"]
                })
            });
            setExtrato(extratos)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (

        <SafeAreaView>
            <Appbar navigation={props.navigation} titulo='Extrato' subTitulo='' backFunc={true}/>
            <View style={style.content}>
                <Button title="Carregar" onPress={getExt} />
                <FlatList
                    style={{ marginTop: 10 }} 
                    data={extrato}
                    renderItem={props => {
                        return <ExtratoItem {...props} navigateRoot={navRoot}></ExtratoItem>
                    }}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    content: {
        padding: 20
    }
})