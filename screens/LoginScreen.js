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

const LoginScreen = () => {

    let [isShowKeyboard, setisShowKeyboard] = useState(false);

    const onKeyboardShow = () => {
        setisShowKeyboard(false)
        Keyboard.dismiss();
    }


    return (
        <TouchableWithoutFeedback onPress={onKeyboardShow}>
            <ImageBackground 
                style={styles.imageBG} 
                source={require('../assets/images/imageBG.jpg')}  
            >
                <View style={{...styles.container, marginTop: isShowKeyboard === true ? 190 : 270}}>
                    <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        <Text style={styles.title}>Войти</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Введите эмейл"
                            onFocus={() => setisShowKeyboard(true)}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Введите пароль"
                            secureTextEntry={true}
                            onFocus={() => setisShowKeyboard(true)}
                        />

                        
                        <TouchableOpacity style={styles.btn} onPress={onKeyboardShow}>

                            <Text style={styles.btnTitle} >Войти</Text>

                        </TouchableOpacity>


                        <View style={styles.footer}>

                            <Text style={styles.footerTitle}>Нет аккаунта? </Text>
                            
                            <TouchableOpacity style={styles.footerBtn}>
                                <Text> Зарегистрироваться </Text>
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
        justifyContent: 'flex-end',
    },
    title: {
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


export default LoginScreen;