import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import PostsScreen from './Screens/PostsScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import ProfileScreen from './Screens/ProfileScreen';

import PostsIcon from './assets/images/grid.svg';
import UserIcon from './assets/images/user.svg';
import CreateIcon from './assets/images/Union.svg';


export default function useRoute(isAuth) {
    if (!isAuth) {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen
                options={{
                    headerShown: false
                }}
                name='Login'
                component={LoginScreen}
                />
                <AuthStack.Screen
                options={{
                    headerShown: false
                }}
                name='Register'
                component={RegistrationScreen} />
            </AuthStack.Navigator>
        )
    }
    return (
        <MainTab.Navigator screenOptions={{tabBarShowLabel: false, tabBarStyle: styles.navigation}}>
            <MainTab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size}) => (
                        <View
                        style={focused ? styles.linkBtnActive : styles.linkBtn}
                        >
                            <PostsIcon size={size} color={focused ? '#FFFFFF' : 'rgba(33, 33, 33, 0.8)'} />
                        </View>
                    )
                }}
                name='Posts'
                component={PostsScreen}
            />
            <MainTab.Screen
                options={{
                    headerShown: false,    
                    tabBarIcon: ({ focused, size}) => (
                        <View
                        style={focused ? styles.linkBtnActive : styles.linkBtn}
                        >
                            <CreateIcon size={size} color={focused ? '#FFFFFF' : 'rgba(33, 33, 33, 0.8)'} />
                        </View>
                    ),
                    tabBarStyle: { display: 'none', width: 10, height: 10},
                }}
                name='Create'
                component={CreatePostsScreen}
            />
            <MainTab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size}) => (
                        <View
                        style={focused ? styles.linkBtnActive : styles.linkBtn}
                        >
                            <UserIcon size={size} color={focused ? '#FFFFFF' : 'rgba(33, 33, 33, 0.8)'} />
                        </View>
                    )
                }}
                name='Profile'
                component={ProfileScreen}
            />
        </MainTab.Navigator>
    )
}

const styles = StyleSheet.create({
    navigation: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 83,     
        paddingHorizontal: 75
    },
    linkBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    linkBtnActive: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height:40,
        marginLeft: 31,
        marginRight: 31,
        backgroundColor: '#FF6C00',
        borderRadius: 20,
    }
})