import React, { useState } from "react";
import { Searchbar, Text } from "react-native-paper";
import { styled } from "styled-components/native";
import { useLocationContext } from "../contexts/LocationContext";
import { Speciality } from "../models";
import { colors } from "../infrastructure/theme/colors";
import { FlatList } from "react-native";

const SearchContainer = styled.View`
  background-color: ${colors.card};
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 110px;
  left: 10px;
  z-index: 5;
`;

const TouchableSearchElt = styled.TouchableOpacity`
  margin-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.accent};
`;

const SearchComponent = ({ navigation }) => {
  const { drs } = useLocationContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const specialtiesArray = Object.values(Speciality);
  const doctorFullNames = drs.map((doctor) => doctor.full_name);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    const filteredItems = [...specialtiesArray, ...doctorFullNames].filter(
      (item) => item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  const SearchElement = ({ item }) => (
    <TouchableSearchElt
      onPress={() => {
        navigation.navigate("SearchScreen", { query: item });
        setSearchQuery("");
      }}
    >
      <Text variant="bodyLarge">{item}</Text>
    </TouchableSearchElt>
  );

  return (
    <>
      <Searchbar
        placeholder="Search for speciality or Dr"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {!!searchQuery && (
        <SearchContainer>
          <FlatList
            style={{ flex: 1 }}
            data={filteredData}
            renderItem={({ item }) => (
              <SearchElement key={item} item={item} navigation={navigation} />
            )}
          />
          {/* {filteredData.map((item) => (
        <SearchElement key={item} item={item} />
      ))} */}
        </SearchContainer>
      )}
    </>
  );
};

export default SearchComponent;
