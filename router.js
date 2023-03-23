import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


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
        <TabStack.Screen options={{
            tabBarIcon: ({focused, size, color}) => <MaterialCommunityIcons name="menu" size={24} color="black" />
        }} name='Main' component={MainScreen}/>
        <TabStack.Screen options={{
            tabBarIcon: ({focused, size, color}) => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
        }} name='Profile' component={ProfileScreen}/>
        <TabStack.Screen options={{
            tabBarIcon: ({focused, size, color}) => <MaterialCommunityIcons name="postage-stamp" size={24} color="black" />
        }} name='Posts' component={PostsScreen}/>
    </TabStack.Navigator>

    }