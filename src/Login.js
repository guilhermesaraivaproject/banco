import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from "axios"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default props => {
    const [agencia, setAgencia] = React.useState('');
    const [conta, setConta] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const irPagina = pagina => {
        props.navigation.navigate(pagina)
    }

    const logar = () => {
        console.log("TESTE")
        const url = 'http://10.0.2.2:3000/signin'
        console.log(url)
        axios.post(url, {
            agencia: '123456',
            conta: '1234',
            password: '123456',
          })
          .then(function (response) {
            console.log(response.data["token"]);
            if(response.data["token"] == undefined) {
                Alert.alert("Opss", response.data)
            } else {
                axios.defaults.headers.common["Authorization"] = 'bearer '+response.data["token"]
                irPagina('App')
            }

          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <SafeAreaView style={style.fullContainer}>
            <View style={style.container}>
                <Text style={style.titulo}>Banco Teste</Text>
                <TextInput mode="outlined" label="Agencia" value={agencia} onChangeText={agencia => setAgencia(agencia)} />
                <TextInput mode="outlined" label="Conta" value={conta} onChangeText={conta => setConta(conta)} />
                <TextInput mode="outlined" label="Senha" value={senha} onChangeText={senha => setSenha(senha)} />
                <Button style={{padding: 10, marginTop: 20}} icon="check" mode="contained" onPress={logar}>
                    Entrar
                </Button>
                <TouchableOpacity style={{alignItems: 'center', marginTop: 20}} >
                    <Text>Ainda não é um usuário ? Registre-se</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    fullContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 50,
        backgroundColor: "#D3D3D3"
    },
    containerUp: {
        padding: 30,
        alignItems: 'center',
        backgroundColor: "#D3D3D3"
    },
    titulo: {
        fontSize: 50,
        marginBottom: 20
    }
})