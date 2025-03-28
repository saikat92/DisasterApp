import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get("http://your-server-ip:5000/api/predictions")
      .then(response => setAlerts(response.data))
      .catch(error => console.error("Error fetching alerts", error));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Real-time Alerts</Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, marginVertical: 5, backgroundColor: '#ffcccb', borderRadius: 10 }}>
            <Text>{item.type} - Severity: {item.severity}</Text>
            <Text>Location: {item.lat}, {item.lng}</Text>
          </View>
        )}
      />
    </View>
  );
}
