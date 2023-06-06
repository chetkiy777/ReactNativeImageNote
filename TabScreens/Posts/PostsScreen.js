import {createNativeStackNavigator} from "@react-navigation/native-stack"
import DefaultPostsScreen from "../NestedScreens/DefaultPostsScreen"
import CommentsScreen from "../NestedScreens/CommentsScreen"
import MapScreen from "../NestedScreens/MapScreen"

const NestedScreen = createNativeStackNavigator()


const PostsScreen = () => {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen name="DefaultScreen" component={DefaultPostsScreen} />
            <NestedScreen.Screen name="Comments" component={CommentsScreen} />
            <NestedScreen.Screen name="Map" component={MapScreen} />
        </NestedScreen.Navigator>
    )
}

export default PostsScreen