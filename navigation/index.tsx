import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, View} from 'react-native';
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import ContactsScreen from "../screens/ContactsScreen";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <Octicons name="search" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route })  => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <FontAwesome5 name="video" size={22} color={'white'} />
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        })}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
