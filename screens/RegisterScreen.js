import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    ImageBackground,
} from "react-native";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {authSignUpUser} from '../redux/auth/authOperations';



let initialState = {
    "login": "",
    "email": "",
    "password": ""
}


const RegisterScreen = ({navigation}) => {

    let [isShowKeyboard, setisShowKeyboard] = useState(false);
    let [state, setState] = useState(initialState)

    const dispatch = useDispatch()

    const onKeyboardShow = () => {
        setisShowKeyboard(false)
        Keyboard.dismiss();
        dispatch(authSignUpUser(state))
    }




    return (
        <TouchableWithoutFeedback onPress={onKeyboardShow}>
            <ImageBackground 
                style={styles.imageBG} 
                source={require('../assets/images/imageBG.jpg')}  
            >
                <View style={{...styles.container, marginTop: isShowKeyboard === true ? 110 : 220}}>
                    <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        <Text style={styles.title}>Регистрация</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Введите логин"
                            onFocus={() => setisShowKeyboard(true)}
                            value={state.login}
                            onChangeText={(value) => setState((prevState) => ({...prevState, login: value}))}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Введите эмейл"
                            onFocus={() => setisShowKeyboard(true)}
                            value={state.email}
                            onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Введите пароль"
                            secureTextEntry={true}
                            onFocus={() => setisShowKeyboard(true)}
                            value={state.password}
                            onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                        />

                        
                        <TouchableOpacity style={styles.btn} onPress={onKeyboardShow}>

                            <Text style={styles.btnTitle} >Регистрация</Text>

                        </TouchableOpacity>


                        <View style={styles.footer}>

                            <Text style={styles.footerTitle}> Уже есть аккаунт? </Text>
                            
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text> Войти </Text>
                            </TouchableOpacity>

                        </View>

                        

                    </KeyboardAvoidingView>
                    
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 20
    },
    imageBG: {
        flex: 1,
        resizeMode: 'cover',
    },
    title: {
        fontFamily: 'Roboto-Bold',
        marginTop: 52,
        color: '#212121',
        fontWeight: 500,
        fontSize: 30,
        textAlign: 'center',

    },
    input: {
        height: 51,
        paddingLeft: 10,
        marginTop: 16,
        backgroundColor: '#E8E8E8',
        borderRadius: 10
        
    },
    btn: {
        height: 51,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 42
    },
    btnTitle: {
        color: '#FFFFFF',
        fontWeight: 400,
        fontSize: 16
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'center'
    },
});


export default RegisterScreen;