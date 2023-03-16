import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
} from "react-native";


const LoginScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <Text style={styles.title}>Войти</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Введите эмейл"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Введите пароль"
                        secureTextEntry={true}
                    />
                    
                    <TouchableOpacity style={styles.btn}>

                        <Text>Войти</Text>

                    </TouchableOpacity>

                    

                </KeyboardAvoidingView>
                
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {

    },
    input: {

    },
    btn: {
        
    }
});

export default LoginScreen;