import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
        { id: 1, nome: 'Joao', nota: 6.7 },
        { id: 2, nome: 'Ana', nota: 7.5 },
        { id: 3, nome: 'Bia', nota: 3.1 },
        { id: 4, nome: 'Claudia', nota: 6.2},
        { id: 5, nome: 'Roberto', nota: 8.8},
        { id: 6, nome: 'Rafael', nota: 10.0 },
        { id: 7, nome: 'Guilherme', nota: 4.6},
        { id: 8, nome: 'Rebeca', nota: 7.3},
        { id: 9, nome: 'Tobias', nota: 4.6},

        { id: 11, nome: 'Joao', nota: 6.7 },
        { id: 12, nome: 'Ana', nota: 7.5 },
        { id: 13, nome: 'Bia', nota: 3.1 },
        { id: 14, nome: 'Claudia', nota: 6.2},
        { id: 15, nome: 'Roberto', nota: 8.8},
        { id: 16, nome: 'Rafael', nota: 10.0 },
        { id: 17, nome: 'Guilherme', nota: 4.6},
        { id: 18, nome: 'Rebeca', nota: 7.3},
        { id: 19, nome: 'Tobias', nota: 4.6},

]

const itemEstilo = {
    paddingHorizontal: 15,
    heigth: 50,
    backgroundColor: '#DDD',
    borderWidth: 1,
    borderColor: '#222',
    alignItems: 'center',
   // flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-end',
}

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Aluno: {props.nome} </Text>
        <Text style={{ fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item }) => {
        return <Aluno {...item}></Aluno>
    }

    return(
    <ScrollView>
        <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}/>        
    </ScrollView>
    )
}

