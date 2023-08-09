import { FlatList } from "react-native";
import { Chip, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";

import { AppointementItem } from "../../components/AppointementItem";
import {
  HomeContainer,
  RowContainer,
  Spacer,
  TitleText,
} from "../../infrastructure/theme";
import { DrHomeItem } from "../../components/DrHomeItem";
import { Appointement, Speciality } from "../../models";
import { SpecialityItem } from "../../components/SpecialityItem";
import { useAuthContext } from "../../contexts/AuthContext";
import { useLocationContext } from "../../contexts/LocationContext";
import SearchComponent from "../../components/SearchComponent";

const HomeScreen = ({ navigation }) => {
  const { dbUser } = useAuthContext();
  const { drs } = useLocationContext();
  const [appointements, setAppointements] = useState([]);

  const specialtiesArray = Object.values(Speciality); //.slice(0, 6);

  //maybe refractor to a context------------------------------------------------
  useEffect(() => {
    DataStore.query(Appointement, (app) => app.patientID.eq(dbUser.id)).then(
      setAppointements
    );
  }, []);
  //------------------------------------------------

  return (
    <HomeContainer>
      <Spacer size={2} />
      <RowContainer style={{ justifyContent: "space-between" }}>
        <Text variant="bodyLarge">Bonjours {dbUser?.username}</Text>
        <Chip icon="map-marker-account">City :{dbUser?.address}</Chip>
      </RowContainer>

      <SearchComponent navigation={navigation} />

      {!!appointements.length && (
        <>
          <TitleText>My appointements</TitleText>
          <RowContainer>
            <FlatList
              data={appointements}
              renderItem={({ item }) => (
                <AppointementItem appointement={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.date}
              horizontal
            />
          </RowContainer>
        </>
      )}
      <TitleText>Top Doctors</TitleText>
      <FlatList
        data={drs}
        renderItem={({ item }) => (
          <DrHomeItem dr={item} navigation={navigation} />
        )}
        horizontal
      />
      <TitleText>Specialities</TitleText>
      <FlatList
        data={specialtiesArray}
        renderItem={({ item }) => (
          <SpecialityItem
            key={item}
            speciality={item}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item}
        horizontal
      />
    </HomeContainer>
  );
};

export default HomeScreen;
