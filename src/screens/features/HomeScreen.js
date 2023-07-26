import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";

import { AppointementItem } from "../../components/AppointementItem";
import {
  RowContainer,
  Spacer,
  SubtitleText,
  ThemeScroll,
  TitleText,
} from "../../infrastructure/theme";

import { DrHomeItem } from "../../components/DrHomeItem";
import { Appointement, Speciality } from "../../models";
import { SpecialityItem } from "../../components/SpecialityItem";
import { useAuthContext } from "../../contexts/AuthContext";
import { useLocationContext } from "../../contexts/LocationContext";
import { styled } from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";

const SearchContainer = styled.Pressable`
  border-radius: 10px;
  background-color: ${colors.disabled};
  padding: 5px;
  width: 100%;
`;
const HomeScreen = ({ navigation }) => {
  const { dbUser } = useAuthContext();
  const { drs, location } = useLocationContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [appointements, setAppointements] = useState([]);

  const onChangeSearch = (query) => setSearchQuery(query);
  const specialtiesArray = Object.values(Speciality).slice(0, 6);
  //navigation.navigate(SearchScreen, {searchQuery:searchQuery})

  //maybe refractor to a context------------------------------------------------
  useEffect(() => {
    DataStore.query(Appointement, (app) => app.patientID.eq(dbUser.id)).then(
      setAppointements
    );
  }, []);
  //------------------------------------------------

  return (
    <ThemeScroll>
      <Spacer size={3} />
      <TitleText>Bonjours {dbUser?.username}</TitleText>
      <SubtitleText>City :{dbUser?.address}</SubtitleText>
      <SearchContainer>
        <SubtitleText>Search</SubtitleText>
      </SearchContainer>
      {!!appointements.length && (
        <>
          <TitleText>My appointements</TitleText>
          <RowContainer>
            <FlatList
              data={appointements}
              renderItem={({ item }) => (
                <AppointementItem appointement={item} />
              )}
              keyExtractor={(item) => item.date}
              horizontal
            />
          </RowContainer>
          <TitleText>Top Doctors</TitleText>
          <FlatList
            data={drs}
            renderItem={({ item }) => (
              <DrHomeItem dr={item} navigation={navigation} />
            )}
            // keyExtractor={(item) => item.id}
            horizontal
          />
          <TitleText>Specialities</TitleText>
          <FlatList
            data={specialtiesArray}
            renderItem={({ item }) => (
              <SpecialityItem key={item} speciality={item} />
            )}
            keyExtractor={(item) => item}
            horizontal
          />
          {/* {specialtiesArray.map((specialty) => (
            <SpecialityItem key={specialty} speciality={specialty} />
          ))} */}
        </>
      )}
    </ThemeScroll>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
