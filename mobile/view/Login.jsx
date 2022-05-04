import react from "react";
import { View, KeyboardAvoidngView, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard, source, Image} from 'react-native';
import { Animated } from 'react-native';
import React,{useState, useEffect} from 'react';

export default function Login(){

    const[offeset] = useState(new Animated.ValueXY({X: 0, y:95}));

    const [opacity] = useState(new Animated.ValueXY(0));

    const [logo] = useState(new Animated.ValueXY({X: 130, y:155}));

    useEffect(()=> {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide)

        Animated.parallel([
            Animated.spring(offeset.y,{
                toValue: 0,
                speed: 4,
                bounciness: 20
            }),
            Animated.timing(opacity,{
                toValue: 1,
                duration: 200,
            })

        ]).start();
    }, []);
        
    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x,{
                toValue: 55,
                duration: 100,

            }),
            Animated.timing(logo.y,{
                toValue: 65,
                duration: 100,

            }),

        ]).start();

    }

    function keyboardDidHide(){

        Animated.parallel([
            Animated.timing(logo.x,{
                toValue: 130,
                duration: 100,

            }),
            Animated.timing(logo.y,{
                toValue: 155,
                duration: 100,

            }),

        ]).start();

    }
    return(
        <KeyboardAvoidngView style={styles.background}>
            <View style={styles.containerLogo}>
                <Animated.Image>
                style={{
                    width: logo.x,
                    height: logo.y,

                }}
                source={require('./src/assets/logo.png')}
                </Animated.Image>
            </View>

            <Animated.View 
            style={[
                styles.container,
                {   opacity: opacity,
                    transform: [
                        {
                            translateY: offeset.y}
                    ]

                }]}>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={()=> {}}
                />

                <TextInput
                    style={style.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={()=> {}}
                />

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerTex}>Criar Conta</Text>
                </TouchableOpacity>

            </Animated.View>
        </KeyboardAvoidngView>

    );
}

const style = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        background:'#191919'

        
    },
    containerLogo:{
        flex:1,
        justifyContent:'center',
    },

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingBottom: 50
    },
    input:{
        backgroundColor: '#fff',
        width:'905',
        marginBottom:15,
        color:'#222',
        fontSize: 17,
        borderRadius: 10,
        padding: 10
    },
    btnSubmit:{
        backgroundColor:'#35AFF',
        width:'90%',
        height: 45,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10

    },
    submitText:{
        color:'#FFF',
        fontSize: 18
    },
    btnRegister: {
        marginTop:10,

    },
    registerTex:{
        color:'#FFF',
    }



});