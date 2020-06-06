import React from 'react'
import {Button, ToastAndroid, Alert, Platform} from 'react-native'


export default props => {

    const notificar = msg => {

        if(Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.LONG)
        }
        
        if(Platform.OS === 'ios'){
            Alert.alert('Alerta:', msg)
        }

    }

    return(
        <Button style={{paddingHorizontal:15}} title='Plataforma?'
            onPress ={() => notificar('Parabéns!')} />
    )

}