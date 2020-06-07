import 'react-native-gesture-handler'
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Simples from './componentes/Simples';
import Parimpar from './componentes/Parimpar';
import {Inverter,MegaSena} from './componentes/Multi';
import Padrao from './estilo/Padrao';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/Validarprops';
import Evento from './componentes/Evento'
import {Avo} from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Teste from './componentes/Teste'



const megasena = () => <MegaSena numeros={6} />
const parimpar = () => <Parimpar numero={30} />
const inverter = () => <Inverter texto='Javan Souza' />
const simples = () => <Simples texto='Javan Souza' />
const contador = () => <View style={Padrao.ex}><Contador/></View>
const plataformas = () => <Plataformas/>
const validarprops = () => <ValidarProps ano={2020}></ValidarProps>
const avo = () => <Avo nome='Josuel' sobrenome='Souza'></Avo>
const listaflex = () => <ListaFlex></ListaFlex>
const estiloDoc = () => <Teste></Teste>
                     
const Drawer = createDrawerNavigator();
 
export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Simples">
        <Drawer.Screen name="Estilo doc" component={estiloDoc} />
          <Drawer.Screen name="Flex List" component={listaflex} />
        <Drawer.Screen name="Comunicação Indireta">{props => <TextoSincronizado></TextoSincronizado>}</Drawer.Screen>
        <Drawer.Screen name="Comunicação Direta" component={avo}/>  
        <Drawer.Screen name="Evento">{props => <Evento></Evento>}</Drawer.Screen>
        <Drawer.Screen name="Validar Props" component={validarprops}/>
        <Drawer.Screen name="Plataforma" component={plataformas} />
        <Drawer.Screen name="Contador" component={contador} />
        <Drawer.Screen name="Mega Sena" component={megasena} />
        <Drawer.Screen name="Par ou Ímpar" component={parimpar} />
        <Drawer.Screen name="Inverter" component={inverter} />
        <Drawer.Screen name="Simples" component={simples} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 

/*import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import {Inverter,MegaSena} from './componentes/Multi'

export default createDrawerNavigator ({

     
    MegaSena: {
        screen: () => <MegaSena numeros={8}></MegaSena>,
        navigationOptions: {title: 'Mega Sena'}
    },  

    Inverter: {
        screen: () => <Inverter texto='Javan Souza'></Inverter>
    },

    Parimpar: {
        screen: () => <Parimpar numero={30}></Parimpar>,
        navigationOptions: {title: 'Par ou Impar?'}
    },

    Simples:{
        screen: () => <Simples texto='Javan souza'></Simples>
    }
    
}, {drawerWidth: 300})*/