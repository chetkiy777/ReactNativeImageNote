import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './TabScreens/Main/MainScreen';
import PostsScreen from './TabScreens/Posts/PostsScreen';
import ProfileScreen from './TabScreens/Profile/ProfileScreen';



export const useRoute = (isAuth) => {

    if (!isAuth) {
        return <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
        <Stack.Screen options={{headerShown: false}}  name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    }

    return <TabStack.Navigator screenOptions={{tabBarShowLabel: false}}>
        <TabStack.Screen  name='Main' component={MainScreen}/>
        <TabStack.Screen name='Profile' component={ProfileScreen}/>
        <TabStack.Screen name='Posts' component={PostsScreen}/>
    </TabStack.Navigator>

    }