import { StyleSheet, View} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


export default function App() {
  return (
      <View style={styles.container}>
          <RegisterScreen />
          {/* <LoginScreen /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
