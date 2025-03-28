import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import PredictionScreen from "../screens/PredictionScreen";
import LiveTrackingScreen from "../screens/LiveTrackingScreen";
import SOSScreen from "../screens/SOSScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Prediction" component={PredictionScreen} />
                <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} />
                <Stack.Screen name="SOS" component={SOSScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
