import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Patient } from "../models";
import { Avatar } from "react-native-paper";
import { RowContainer } from "../infrastructure/theme";
import { colors } from "../infrastructure/theme/colors";
import { AirbnbRating } from "react-native-ratings";
import { styled } from "styled-components/native";
import { fontWeights } from "../infrastructure/theme/fonts";

const ReviewContainer = styled.View`
  border-radius: 10px;
  elevation: 2;
  background-color: ${colors.onSurface};
  padding: 10px;
  margin-bottom: 3px;
`;
const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ReviewerName = styled.Text`
  color: ${colors.accent};
  font-weight: ${fontWeights.bold};
  margin-left: 10px;
`;

const ReviewText = styled.Text`
  color: ${colors.backdrop};
  margin: 5px;
`;

export const ReviewItem = ({ review }) => {
  //maybe refractor to a context------------------------------------------------
  const [patient, setPatient] = useState();
  useEffect(() => {
    if (review) DataStore.query(Patient, review.patientID).then(setPatient);
  }, [review]);
  //----------------------------------------------------------------------------
  return (
    <ReviewContainer>
      <HeaderContainer>
        <RowContainer>
          <Avatar.Icon size={30} icon={"account"} />
          <ReviewerName>{patient?.username}</ReviewerName>
        </RowContainer>
        <AirbnbRating
          isDisabled
          defaultRating={review.score}
          showRating={false}
          size={16}
          selectedColor={colors.accent}
        />
      </HeaderContainer>
      <ReviewText>{review.description}</ReviewText>
    </ReviewContainer>
  );
};
