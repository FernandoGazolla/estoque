import {View, 
    Text, 
    TextInput, 
    StyleSheet,
    Button} from 'react-native';

import { useState } from 'react';
import {Picker} from '@react-native-picker/picker'

export default function Produto()
{

    const [nome, setNome] = useState('');
    const [codBarras, setCodBarras] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [geoLoc, setGeoLoc] = useState('');

    const [locCadastradas, setLocCdadastradas] = useState([
        {nome: "Filial São Paulo", id: "filial-SP"},
        {nome: "Filial Cuiaba", id: "filial-MT"},
        {nome: "Filial Minas Gerais", id: "filial-MG"}
    ]);

    const itens = locCadastradas.map(function (Item){
        return <Picker.Item label= {Item.nome} value= {Item.id}></Picker.Item>
    });

    return (
        <View>
            <TextInput 
                onChangeText={(valor) => setCodBarras(valor)}
                style={css.input} 
                keyboardType="numeric"
                placeholder='Código de Barras'/>
            <TextInput
                onChangeText={(valor) => setNome(valor)} 
                style={css.input} 
                placeholder='Nome'/>
            <TextInput 
                onChangeText={(valor) => setLocalidade(valor)}
                style={css.input} 
                placeholder='Localidade'/>
                <Picker onValueChange={(valor)=> setLocalidade(valor)}>
                    {itens}
                </Picker>
            <TextInput 
                onChangeText={(valor) => setGeoLoc(valor)}
                style={css.input} 
                placeholder='Geolocalização'/>
            <Button title='Cadastrar'/>
        </View>
    )
}

const css = StyleSheet.create({
    input: {
        height: 40,
        marginTop: 10
    }
})