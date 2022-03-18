import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import env from "../../env";

export default function UberMapView(props) {
  const { currentLocation, destination } = props.route.params;

  const directions = [
    {
      latitude: currentLocation.lat,
      longitude: currentLocation.lng,
    },
    {
      latitude: destination.lat,
      longitude: destination.lng,
    },
  ];

  const mapRef = useRef(null);

  useEffect(() => {
    // please use if check
    //zoom out
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
    });
  }, [directions[0], directions[1]]);

  return (
    <View style={{ height: "50%", width: "100%", backgroundColor: "orange" }}>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        showsUserLocation={false}
        initialRegion={{
          latitude: directions[0].latitude,
          longitude: directions[0].longitude,
          latitudeDelta: 0.0005,
          longitudeDelta: 0.0005,
        }}
      >
        <MapViewDirections
          origin={directions[0]}
          destination={directions[1]}
          apikey={env.googleDirectionAPI} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
          showsScale={true}
          zoomEnabled={true}
        />
        <Marker coordinate={directions[0]} identifier={"origin"} />
        <Marker coordinate={directions[1]} identifier={"destination"} />
      </MapView>
    </View>
  );
}
