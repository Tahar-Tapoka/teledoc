import { FlatList } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { styled } from "styled-components/native";

import { useLocationContext } from "../../contexts/LocationContext";
import { DrItem } from "../../components/DrItem";
import { Container, Spacer } from "../../infrastructure/theme";
import { colors } from "../../infrastructure/theme/colors";
import { formatUpperCase } from "../../functions";
import SearchComponent from "../../components/SearchComponent";

const SearchContainer = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding: 10px;
`;

const SearchScreen = ({ route, navigation }) => {
  const query = route?.params.query;
  const { drs } = useLocationContext();

  let searchedData = drs.filter((dr) => dr.speciality === query);
  if (!searchedData.length)
    searchedData = drs.filter((dr) => dr.full_name === query);

  return (
    <SearchContainer>
      {searchedData.length ? (
        <>
          <Spacer size={3} />
          <SearchComponent navigation={navigation} />
          <FlatList
            data={searchedData}
            renderItem={({ item }) => (
              <DrItem dr={item} navigation={navigation} />
            )}
          />
        </>
      ) : (
        <Container>
          <Avatar.Image
            size={250}
            source={require("../../../assets/notFound.jpg")}
          />
          <Text variant="headlineMedium">
            Désolé!! Pas de {formatUpperCase(query)}s dans la region !
          </Text>
        </Container>
      )}
    </SearchContainer>
  );
};

export default SearchScreen;
