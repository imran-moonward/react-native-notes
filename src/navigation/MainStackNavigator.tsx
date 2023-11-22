import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../constants/colors';
import SplashScreen from '../screens/splash-screen';
import {MainStackParamList} from '../types/navigation-types';
import React from 'react';
import MainTabNavigator from './MainTabNavigator';
import NoteEditor from '../screens/note-editor';

const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.WHITE},
      }}
      initialRouteName={'SplashScreen'}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'MainTabNavigator'} component={MainTabNavigator} />
      <Stack.Screen name={'NoteEditor'} component={NoteEditor} />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
