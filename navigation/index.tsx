import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';


import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ChapterScreen from '../screens/ChapterScreen';
import SelectScreen from '../screens/SelectScreen';
import AllScreen from '../screens/AllScreen';
import SearchScreen from '../screens/SearchScreen';



import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="SelectScreen" component={SelectScreen} options={{ title: 'Rated' }} />
      <Stack.Screen name="TabDetails" component={DetailScreen} options={{ title: 'Details' }} />
      <Stack.Screen name="TabChapter" component={ChapterScreen} options={{ title: 'Chapter' }} />
      <Stack.Screen name="AllScreen" component={AllScreen} options={{ title: 'All' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>


      <BottomTab.Screen
        name="TabSearch"
        component={SearchScreen}
        options={{
          title: 'SEARCH',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />     



    <BottomTab.Screen
        name="TabHome"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'TabHome'>) => ({
          title: 'HOME',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        })}
    />


    <BottomTab.Screen
        name="TabFavorites"
        component={FavoritesScreen}
        options={{
          title: 'I LOVE IT',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * icon families and icons on https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
