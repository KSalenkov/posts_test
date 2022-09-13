import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Header} from "../components/Header";

import {SignIn} from "../screens/SignIn";
import {Posts} from "../screens/Posts";

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: Header}}>
          <Stack.Screen name="Auth" component={SignIn} options={{title: "Auth"}} />
          <Stack.Screen name="Posts" component={Posts} options={{title: "Каналсервис"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
