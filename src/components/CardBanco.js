import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default props => {

    const myIcon = <Icon name="chevron-forward-outline" size={30} color="#000" />

    return (
        <Card style={{backgroundColor: props.cor, marginBottom: 10}} onPress={() => {
                if(props.pagina != undefined && props.irPagina != undefined) {
                    props.irPagina(props.pagina)
                } else if (props.funcaoModal != undefined) {
                    props.funcaoModal()
                } else if(props.pagina != undefined && props.irPaginaRoot != undefined) {
                    props.irPaginaRoot(props.pagina)
                }
            }}>
            <Card.Content style={style.content}>
                <View style={style.contentLeft}>
                    <Title>{props.titulo}</Title>
                    <Paragraph>{props.desc}</Paragraph>
                </View>
                <View style={style.contentRigth}>
                    {props.pagina != undefined ? myIcon : <Text></Text>}
                </View>
            </Card.Content>
        </Card>
    )
}

const style = StyleSheet.create({
    content: {
        flexDirection: 'row',
    },
    contentLeft: {
        flexGrow: 8,
        alignItems: 'flex-start'
    },
    contentRigth: {
        flexGrow: 2,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})
