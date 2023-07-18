import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { useLocationContext } from "../../contexts/LocationContext";
import { CompactDrInfo, CompactImage } from "../../components/CompactDrInfo";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import LoadingScreen from "../../components/LoadingScreen";
import { DrItem } from "../../components/DrItem";
import {
  NotificationText,
  Spacer,
  SubtitleText,
} from "../../infrastructure/theme";

const DrNearMeScreen = ({ navigation }) => {
  const { drs, location } = useLocationContext();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["15%", "95%"], []);
  const [selectedDr, setSelectedDr] = useState();
  console.log(location);
  const filteredDrs = drs
    .filter((dr) => dr.id !== selectedDr?.id)
    .filter((dr) => dr.speciality === selectedDr?.speciality);

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
            onPress={() => setSelectedDr(dr)}
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
        {selectedDr ? (
          <>
            <DrItem dr={selectedDr} navigation={navigation} />
            {filteredDrs[0] && (
              <Spacer size={2}>
                <SubtitleText style={{ alignSelf: "center", fontWeight: 600 }}>
                  Other {selectedDr.speciality} Drs in the area
                </SubtitleText>
              </Spacer>
            )}
            <BottomSheetFlatList
              data={filteredDrs}
              renderItem={({ item }) => (
                <DrItem dr={item} navigation={navigation} />
              )}
            />
          </>
        ) : (
          <>
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
          </>
        )}
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
