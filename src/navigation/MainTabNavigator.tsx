import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../assets/icons/HomeIcon';
import {Colors} from '../constants/colors';
import HomeScreen from '../screens/home-screen';
import {MainTabParamList} from '../types/navigation-types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: Colors.MYNOTE_GREEN_LIGHT,
          borderTopWidth: 0.175,
          paddingTop: 10,
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <HomeIcon height="32" width="32" color={Colors.MYNOTE_GREEN} />
              );
            return <HomeIcon height="32" width="32" />;
          },
          tabBarIconStyle: {
            marginTop: 10,
            marginLeft: 5,
          },
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: Colors.MYNOTE_GREEN,
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabNavigator;
