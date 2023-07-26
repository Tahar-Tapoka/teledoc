import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import { Dimensions, View } from "react-native";
import { DataStore } from "aws-amplify";
import { Consultant } from "../models";

import { RowContainer } from "../infrastructure/theme";
import { colors } from "../infrastructure/theme/colors";
import { fontWeights } from "../infrastructure/theme/fonts";
import { formatDate, formatUpperCase } from "../functions";

const { width } = Dimensions.get("window");

//maybe refractor some of these styles------------------------------------------------
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

const DrImage = styled.Image`
  border-radius: 10px;
  width: 70px;
  height: 100px;
  margin-right: 20px;
`;
//----------------------------------------------------------------------------

export const AppointementItem = ({ appointement }) => {
  //maybe refractor to a context------------------------------------------------
  const [dr, setDr] = useState();
  useEffect(() => {
    DataStore.query(Consultant, appointement.consultantID).then(setDr);
  }, [appointement]);
  //----------------------------------------------------------------------------

  return (
    <ReviewContainer>
      {dr && (
        <RowContainer>
          <DrImage source={{ uri: dr.picture }} />
          <View>
            <ReviewerName>Dr.{dr.full_name}</ReviewerName>
            <ReviewText>{formatUpperCase(dr.speciality)}</ReviewText>
            <ReviewText>{dr.address}</ReviewText>
          </View>
        </RowContainer>
      )}
      <DateContainer>
        <ReviewerName>
          {formatDate(appointement?.date, appointement?.time)}
        </ReviewerName>
      </DateContainer>
    </ReviewContainer>
  );
};
