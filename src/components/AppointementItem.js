import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Consultant, Patient } from "../models";
import { Avatar } from "react-native-paper";
import { RowContainer } from "../infrastructure/theme";
import { colors } from "../infrastructure/theme/colors";
import { AirbnbRating } from "react-native-ratings";
import { styled } from "styled-components/native";
import { fontWeights } from "../infrastructure/theme/fonts";
const { width, height } = Dimensions.get("window");

import drs from "../../assets/drs.json"; // homie
import { Dimensions, View } from "react-native";
import { DrImage } from "./DrItem";

const ReviewContainer = styled.View`
  border-radius: 10px;
  elevation: 2;
  background-color: ${colors.surface};
  padding: 10px;
  margin: 3px;
  width: ${width / 1.3}px;
  justify-content: center;
  align-items: center;
`;
const DateContainer = styled.View`
  border-radius: 10px;
  background-color: ${colors.accent};
  padding: 5px;
  width: 100%;
  align-items: center;
`;

const ReviewerName = styled.Text`
  color: ${colors.white};
  font-weight: ${fontWeights.bold};
`;

const ReviewText = styled.Text`
  color: ${colors.backdrop};
  margin: 2px;
`;

export const AppointementItem = ({ appointement }) => {
  //maybe refractor to a context------------------------------------------------
  const [dr, setDr] = useState(drs[0]);
  //   useEffect(() => {
  //     if (appointement)
  //       DataStore.query(Consultant, appointement.drID).then(setDr);
  //   }, [appointement]);
  //----------------------------------------------------------------------------
  return (
    <ReviewContainer>
      <RowContainer>
        <DrImage source={{ uri: dr.picture }} />
        <View>
          <ReviewerName>Dr.{dr?.full_name}</ReviewerName>
          <ReviewText>{dr?.speciality}</ReviewText>
          <ReviewText>{dr?.address}</ReviewText>
        </View>
      </RowContainer>
      <DateContainer>
        <ReviewerName>{appointement.date}</ReviewerName>
      </DateContainer>
    </ReviewContainer>
  );
};
