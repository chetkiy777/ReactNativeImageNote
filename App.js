import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
