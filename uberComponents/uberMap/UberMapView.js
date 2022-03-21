import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import env from "../../env";
import { useDispatch, useSelector } from "react-redux";

export default function UberMapView(props) {
  const origin = useSelector((state) => state.rideReducer.origin);
  const destination = useSelector((state) => state.rideReducer.destination);

  console.log(origin.origin.lat);
  const directions = [
    {
      latitude: origin.origin.lat,
      longitude: origin.origin.lng,
    },
    {
      latitude: destination.destination.lat,
      longitude: destination.destination.lng,
    },
  ];

  const mapRef = useRef(null);

  useEffect(() => {
    if (!directions[0] || !directions[1]) return;
    //zoom out
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
    });
  }, [directions[0], directions[1]]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&destinations=${destination.destination.lat}%2C${destination.destination.lng}&origins=${origin.origin.lat}%2C${origin.origin.lng}&key=${env.googleMatrixAPI}`
    )
      .then((res) => res.json())
      .then((data) => {
        const info = data.rows[0].elements[0];
        dispatch({
          type: "SET_TRAVEL_INFO",
          payload: { info },
        });
      });
  });

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
