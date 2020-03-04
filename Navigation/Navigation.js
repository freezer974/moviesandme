import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import Test from '../Components/Test'

const Stack = createStackNavigator()

function SearchStackNavigator () {
    return (
        <Stack.Navigator initialRouteName="Search" screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen name="Search" component={Search} options={{ title: 'Rechercher' }} />
            <Stack.Screen name="FilmDetail" component={FilmDetail} options={{ title: 'Detail du film' }} />
        </Stack.Navigator>
    )
}

function FavoritesStackNavigator () {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Favoris' }} />
            <Stack.Screen name="FilmDetail" component={FilmDetail} options={{ title: 'Detail du film' }} />
        </Stack.Navigator>
    )
}

const MainStackNavigation = () => {
    return (
        <NavigationContainer>
            <MoviesTabNavigator />
        </NavigationContainer>
    )
}

const MyTabs = createBottomTabNavigator()

function MoviesTabNavigator () {
    return (
        <MyTabs.Navigator
            tabBarOptions={{
                showLabel: false,
                showIcon: true,
                activeBackgroundColor: '#DDDDDD',
                inactiveBackgroundColor: '#FFFFFF'

            }}>
            {/* <MyTabs.Screen
                name="Test"
                component={Test}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="test" color={color} size={size} />
                    ),
                }} /> */}
            <MyTabs.Screen
                name="Search"
                component={SearchStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ),
                }} />
            <MyTabs.Screen
                name="Favorites"
                component={FavoritesStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                }} />
        </MyTabs.Navigator>
    )
}

export default MainStackNavigation