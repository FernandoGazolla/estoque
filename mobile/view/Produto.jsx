import {View, 
    Text, 
    TextInput, 
    StyleSheet,
    Button} from 'react-native';

import { useState } from 'react';

export default function Produto()
{

    const [nome, setNome] = useState('');
    const [codBarras, setCodBarras] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [geoLoc, setGeoLoc] = useState('');

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