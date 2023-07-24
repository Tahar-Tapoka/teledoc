import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AppointementItem } from "../../components/AppointementItem";
import {
  RowContainer,
  Spacer,
  SubtitleText,
  ThemeScroll,
  TitleText,
} from "../../infrastructure/theme";
import { Searchbar } from "react-native-paper";

import drs from "../../../assets/drs.json"; //homie get it from context
import { DrHomeItem } from "../../components/DrHomeItem";
import { Speciality } from "../../models";
import { SpecialityItem } from "../../components/SpecialityItem";

const appointements = [
  {
    date: "Fiday, April 25, 8:00AM-8:30AM",
    status: "ACTIVE",
    drId: "someId",
    patientId: "someOtherId",
  },
  {
    date: "Wednesday, April 28, 8:00AM-8:30AM",
    status: "ACTIVE",
    drId: "someId",
    patientId: "someOtherId",
  },
  {
    date: "Monday, August 01, 01:00PM-01:30PM",
    status: "ACTIVE",
    drId: "someId",
    patientId: "someOtherId",
  },
];
const HomeScreen = () => {
  // const { dbUser } = useAuthContext();
  const dbUser = { username: "Tapoka", address: "602 Howell Plaza" };
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const specialtiesArray = Object.values(Speciality).slice(0, 6);
  //navigation.navigate(SearchScreen, {searchQuery:searchQuery})
  return (
    <ThemeScroll>
      <Spacer size={3} />
      <TitleText>Hello {dbUser?.username}</TitleText>
      <SubtitleText>City :{dbUser?.address}</SubtitleText>
      {/* <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      /> */}
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
            renderItem={({ item }) => <DrHomeItem dr={item} />}
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
