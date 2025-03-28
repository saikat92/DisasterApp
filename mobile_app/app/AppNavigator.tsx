import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DisasterMapScreen from './screens/DisasterMapScreen';
import AlertsScreen from './screens/AlertsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Disaster Map" component={DisasterMapScreen} />
        <Stack.Screen name="Alerts" component={AlertsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
