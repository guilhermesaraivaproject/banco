import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default props => {

    const irDetalhe = () => {
        props.navigateRoot.push('DetalheTransacao', { transacao: props.item })
    }

    return (
        <TouchableOpacity onPress={irDetalhe}>
            <View style={style.contentOut}>
                <Text style={style.textoPrincipal}>{props.item.nome}</Text>
                <View style={style.content}>
                    <View style={{flexGrow:5, alignItems: 'flex-start'}}>
                        <Text>R$ {props.item.valor}</Text>
                    </View>
                    <View style={{flexGrow:5, alignItems: 'flex-end'}}>
                        <Text>{props.item.doneAt}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    contentOut: {
        backgroundColor: "#c6c6c6",
        marginBottom: 10,
        borderRadius: 20
    },
    content: {
        flexDirection: 'row',
        padding: 5,
        marginRight: 10,
        marginLeft: 20
    },
    textoPrincipal: {
        marginLeft: 20,
        fontSize: 20
    }
})