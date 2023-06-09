import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useRef } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { useLocationContext } from "../../contexts/LocationContext";
import { CompactDrInfo, CompactImage } from "../../components/CompactDrInfo";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import LoadingScreen from "../../components/LoadingScreen";
import { DrItem } from "../../components/DrItem";

const DrNearMeScreen = ({ navigation }) => {
  const { drs, location } = useLocationContext();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  console.log(location);

  // if (!location) return <LoadingScreen />;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        showsUserLocation
        initialRegion={{
          latitude: 35.61595421,
          longitude: 2.7924221,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.02,
        }}
        style={{ width: "100%", height: "100%" }}
        region={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.02,
        }}
      >
        {drs?.map((dr) => (
          <Marker
            key={dr.id}
            // title={dr.full_name}
            // description={dr.speciality}
            coordinate={{
              latitude: dr.lat,
              longitude: dr.lng,
            }}
          >
            <CompactImage source={{ uri: dr.picture }} />
            <CompactDrInfo dr={dr} />
          </Marker>
        ))}
      </MapView>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: "gray", width: 100 }}
      >
        <View style={styles.contentContainer}>
          <Text style={{ fontWeight: 600 }}>You're Now Online 🎉</Text>
          <Text style={{ color: "grey", marginTop: 5 }}>
            {drs.length ? drs.length : "No"} Available Nearby Doctors
          </Text>
        </View>
        <BottomSheetFlatList
          data={drs}
          renderItem={({ item }) => (
            <DrItem dr={item} navigation={navigation} />
          )}
        />
      </BottomSheet>
    </View>
  );
};

export default DrNearMeScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  contentContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  marker: {
    backgroundColor: "green",
    borderRadius: 20,
    padding: 5,
  },
});
