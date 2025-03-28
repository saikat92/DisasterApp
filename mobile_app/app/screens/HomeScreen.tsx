import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Disaster Prediction & Prevention App</Text>
      <Button title="View Disaster Map" onPress={() => navigation.navigate('Disaster Map')} />
      <Button title="View Alerts" onPress={() => navigation.navigate('Alerts')} />
    </View>
  );
}
