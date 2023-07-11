import { createContext, useContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { Consultant, Patient } from "../models";
import { Alert } from "react-native";
import { DataStore } from "aws-amplify";

const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [drs, setDrs] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Please grant using location to TelaDoc!!");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    DataStore.query(Consultant, (dr) => dr.status.eq("ACTIVE")).then(setDrs);
  }, []);

  return (
    <LocationContext.Provider value={{ location, drs }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);
