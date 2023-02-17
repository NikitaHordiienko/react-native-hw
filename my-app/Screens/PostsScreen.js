import { createStackNavigator } from "@react-navigation/stack";

import DefaultPostsScreen from "./nestedScreens/DefaultPostsScreen";
import CommentScreen from "./nestedScreens/CommentsScreen";
import MapScreen from "./nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen
                options={{
                    headerShown: false
                }}
                name='DefaultScreen'
                component={DefaultPostsScreen}
            />
            <NestedScreen.Screen
                options={{
                    headerShown: false,
                }}
                name='Comment'
                component={CommentScreen}
            />
            <NestedScreen.Screen
                options={{
                    headerShown: false
                }}
                name='Map'
                component={MapScreen}
            />
        </NestedScreen.Navigator>
    )

}