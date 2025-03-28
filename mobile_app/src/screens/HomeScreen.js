import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Welcome to Disaster Prediction App</Text>
            <Button title="Predict Disaster" onPress={() => navigation.navigate("Prediction")} />
            <Button title="Live Tracking" onPress={() => navigation.navigate("LiveTracking")} />
            <Button title="Emergency SOS" onPress={() => navigation.navigate("SOS")} />
        </View>
    );
}
