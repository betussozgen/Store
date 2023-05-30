/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type { PropsWithChildren } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import Loading from './components/Loading';


const Stack = createNativeStackNavigator();

function App() {

  const userSession = useSelector(s => s.user)
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name='Products'
            component={Products}
            options={{
              title: 'Dükkan',
              headerStyle: { backgroundColor: '#64b5f6' },
              headerTitleStyle: { color: 'white' },
            }}
          />
          <Stack.Screen
            name='Detail'
            component={Detail}
            options={{
              title: 'Detay',
              headerStyle: { backgroundColor: '#64b5f6' },
              headerTitleStyle: { color: 'white' },
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}


export default App;
