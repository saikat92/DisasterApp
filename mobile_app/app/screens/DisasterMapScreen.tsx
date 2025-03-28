// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';

// // import MapView, { Marker } from 'react-native-maps';
// import axios from 'axios';

// export default function DisasterMapScreen() {
//   const [disasters, setDisasters] = useState([]);

//   useEffect(() => {
//     axios.get("http://your-server-ip:5000/api/predictions")
//       .then(response => setDisasters(response.data))
//       .catch(error => console.error("Error fetching data", error));
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={{
//           latitude: 37.7749,
//           longitude: -122.4194,
//           latitudeDelta: 5,
//           longitudeDelta: 5,
//         }}
//       >
//         {disasters.map((disaster) => (
//           <Marker
//             key={disaster.id}
//             coordinate={{ latitude: disaster.lat, longitude: disaster.lng }}
//             title={disaster.type}
//             description={`Severity: ${disaster.severity}`}
//           />
//         ))}
//       </MapView>
//     </View>
//   );
// }

import { Platform } from "react-native";
import dynamic from "next/dynamic";

// let MapView;
// if (Platform.OS !== "web") {
//   MapView = require("react-native-maps").default;
// } else {
  const { MapContainer, TileLayer, Marker, Popup } = dynamic(() => import("react-leaflet"), { ssr: false });
// }

export default function MapViewComponent() {
  if (Platform.OS === "web") {
    return (
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    );
  }

  // return <MapView satyle={{ flex: 1 }} />;
}
