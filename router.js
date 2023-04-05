import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CreateScreen from './TabScreens/Create/CreateScreen';
import PostsScreen from './TabScreens/Posts/PostsScreen';
import ProfileScreen from './TabScreens/Profile/ProfileScreen';



export const useRoute = (isAuth) => {

    if (!isAuth) {
        return <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
            <Stack.Screen options={{headerShown: false}}  name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    }

    return <TabStack.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>

        <TabStack.Screen options={{
            tabBarIcon: ({focused, size, color}) => <MaterialCommunityIcons name="postage-stamp" size={size} color={color} />
        }} name='Posts' component={PostsScreen}/>

        <TabStack.Screen options={{
            tabBarIcon: ({focused, size, color}) => <Ionicons name="add-circle-outline" size={40} color={color}  />
        }} name='Create' component={CreateScreen}/>

        <TabStack.Screen options={{
            tabBarIcon: ({focused, size, color}) => <MaterialCommunityIcons name="face-man-profile" size={size} color={color} />
        }} name='Profile' component={ProfileScreen}/>
        
    </TabStack.Navigator>

    }