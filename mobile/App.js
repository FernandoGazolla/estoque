

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Pagina = createNativeStackNavigator();

import Home from './view/Home'
import Login from './view/Login'
import Produto from './view/Produto';

export default function App() {
  return (
    <NavigationContainer>
      <Pagina.Navigator initialRouteName="Home">
        <Pagina.Screen name="Home" component={Home} />
        <Pagina.Screen name="Login" component={Login} />
        <Pagina.Screen name="Produto" component={Produto} options={ {title: "Cadastrar Produto"} } />
      </Pagina.Navigator>
    </NavigationContainer>
  );
}