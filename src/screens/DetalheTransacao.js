import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, PermissionsAndroid, Image } from "react-native";
import Appbar from "../components/Appbar";
import {launchCamera, launchImageLibrary, show} from 'react-native-image-picker';
import { useState } from 'react';
import axios from 'axios';

export default props => {

    const transacao = props.route.params.transacao

    const [image64, setImage64] = useState(null)
    const [botaoEnviarFoto, setbotaoEnviarFoto] = useState(null)

    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "App Camera Permission",
              message:"App needs access to your camera ",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            addFoto()
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };
      
    const addFoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
            saveToPhotos: true
        }
        launchCamera(options, callback => {
            //console.log(callback)
            setImage64(callback['base64'])
            setbotaoEnviarFoto(<Button title="Enviar Foto" onPress={enviarFoto} />)
            console.log(image64)
        });
    }

    const enviarFoto = () => {
        console.log(image64)
        axios.post('http://10.0.2.2:3000/transacoes/addImageRef', {
            id: transacao.id,
            base64: image64
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
            <Appbar navigation={props.navigation} titulo='Detalhe Transação' subTitulo='' backFunc={true}/>
            <View style={style.content}>
                <Text style={style.textoTitulo}>Agência</Text>
                <Text>{transacao.agencia}</Text>
                <Text style={style.textoTitulo}>Conta</Text>
                <Text>{transacao.conta}</Text>
                <Text style={style.textoTitulo}>Nome</Text>
                <Text>{transacao.nome}</Text>
                <Text style={style.textoTitulo}>Valor</Text>
                <Text>R$ {transacao.valor}</Text>
                <Text style={style.textoTitulo}>Data</Text>
                <Text>{transacao.doneAt}</Text>
                <Button title="Adicionar Foto" onPress={requestCameraPermission} />
                <Image
                    style={style.logo}
                    source={{
                    uri:
                        'data:image/png;base64,'+image64,
                    }}
                />
                {botaoEnviarFoto}
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    content: {
        padding: 20
    },
    textoTitulo: {
        fontSize: 20
    },
    textoPadrao: {
        fontSize: 15
    },
    logo: {
      width: '100%',
      height: 300,
      resizeMode: 'center'
    }
})