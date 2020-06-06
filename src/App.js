import 'react-native-gesture-handler'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import {Inverter,MegaSena} from './componentes/Multi'


 
export default class App extends React.Component {


  render() {
    return (
    <View style={styles.container}>
      <Simples texto='Par ou impar'/> 
      <Parimpar numero={38}></Parimpar>
      <Inverter texto='Javan'></Inverter>
      <MegaSena numeros={6}></MegaSena>
    </View>   
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  f20: {
    fontSize: 50
  }
})

