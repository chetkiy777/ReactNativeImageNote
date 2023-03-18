import { StyleSheet, View} from 'react-native';
import { useCallback } from 'react';
import {useFonts} from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './TabScreens/Main/MainScreen';
import PostsScreen from './TabScreens/Posts/PostsScreen';
import ProfileScreen from './TabScreens/Profile/ProfileScreen';


SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
            <Stack.Screen options={{headerShown: false}}  name='Register' component={RegisterScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}


{/* <TabStack.Navigator>
  <TabStack.Screen name='Main' component={MainScreen}/>
  <TabStack.Screen name='Profile' component={ProfileScreen}/>
  <TabStack.Screen name='Posts' component={PostsScreen}/>
</TabStack.Navigator> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
