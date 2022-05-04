import {View, Text, Button} from 'react-native';

export default function Home(props)
{
    function abrir()
    {
        props.navigation.navigate("Produto");
    }

    return (
        <View>
            <Text>Home</Text>
            <Button title="Cadastrar Produto" onPress={abrir} />
        </View>
    )
}