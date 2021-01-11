import * as React from 'react';
import { StyleSheet, View, SafeAreaView, Alert } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import Appbar from "../components/Appbar";
import axios from "axios"
import { useNavigation } from '@react-navigation/native';

export default props => {
    const [agencia, setAgencia] = React.useState('');
    const [conta, setConta] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [valor, setValor] = React.useState('');

    const nav = useNavigation()

    const criarDeposito = () => {
        axios.post('http://10.0.2.2:3000/transacoes/salvar', {
            agencia: agencia,
            conta: conta,
            nome: nome,
            tipo: 'Deposito',
            valor: valor,
            doneAt: new Date()
          })
          .then(function (response) {
            console.log(response.status);
            if(response.status == 204) {
                Alert.alert('Sucesso !', 'Deposito Criado')
                nav.goBack()
            } else {
                Alert.alert('Opss !', response.data)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (

        <SafeAreaView>
            <Appbar navigation={props.navigation} titulo='Novo Deposito' subTitulo='' backFunc={true}/>
            <View style={style.content}>
                
                <TextInput style={style.textInp} mode="outlined" label="Nome" value={nome} onChangeText={nome => setNome(nome)} />
                <TextInput style={style.textInp} mode="outlined" label="Agencia" value={agencia} onChangeText={agencia => setAgencia(agencia)} />
                <TextInput style={style.textInp} mode="outlined" label="Conta" value={conta} onChangeText={conta => setConta(conta)} />
                <TextInput style={style.textInp} mode="outlined" label="Valor" value={valor} onChangeText={agencia => setValor(agencia)} />

                <View style={style.viewButtons}>
                    <Button style={style.buttonD} icon="check" mode="contained" onPress={criarDeposito}>
                        Depositar
                    </Button>
                    <Button style={style.buttonE} icon="close" mode="outlined" onPress={() => nav.goBack()} color='#F00'>
                        Cancelar
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    content: {
        padding: 20
    },  
    modal:{
        justifyContent: 'flex-start',
        backgroundColor: "#FFF",
        padding: 10,
        height: '80%',
        marginLeft: 30,
        marginRight: 30,
    },
    textInp: {
        marginBottom: 10
    },
    viewButtons: {
        flexDirection: 'row'
    },
    buttonD: {
        flex: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginRight: 10
    },
    buttonE: {
        flex: 5,
        marginLeft: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
})