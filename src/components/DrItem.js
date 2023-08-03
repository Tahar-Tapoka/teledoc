import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

import {
  NotificationText,
  Rating,
  RowContainer,
  TitleText,
} from "../infrastructure/theme";
import { colors } from "../infrastructure/theme/colors";
import BookingButtons from "./BookingButtons";
import { formatUpperCase } from "../functions";

export const Item = styled.TouchableOpacity`
  border-color: ${colors.accent};
  border-width: 2px;
  border-radius: 10px;
  flex-direction: row;
  margin-top: 5px;
  background-color: ${colors.background};
  elevation: 3;
`;
export const Info = styled.View`
  margin: 5px;
`;
export const InfoContainer = styled.View`
  max-width: 80%;
`;
export const DrImage = styled.Image`
  width: 20%;
  margin: 3px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;
export const DescriptionText = styled.Text`
  color: ${colors.backdrop};
`;

export const Feedback = styled.View`
  margin-left: auto;
  margin-right: 25px;
  justify-content: center;
`;
export const FeedbackText = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  margin-vertical: 3px;
`;

export const EmojiText = ({ txt, icon, color }) => (
  <RowContainer>
    <MaterialCommunityIcons name={icon} size={18} color={color} />
    <FeedbackText>{txt}</FeedbackText>
  </RowContainer>
);

export const DrItem = ({ dr, navigation }) => {
  return (
    <>
      <Item onPress={() => navigation.navigate("DrProfileScreen", { dr: dr })}>
        <DrImage source={{ uri: dr.picture }} />
        <InfoContainer>
          <TitleText>Dr. {dr.full_name}</TitleText>
          <RowContainer>
            <Info>
              <DescriptionText>
                {formatUpperCase(dr.speciality)}
              </DescriptionText>
              <NotificationText>
                {dr.experience} Years of Experience
              </NotificationText>
            </Info>
            <Feedback>
              <Rating rating={parseFloat(dr.score).toFixed(1)} />
              <EmojiText
                txt={`${dr.nbr_patient} Patient`}
                icon={"emoticon-sick"}
                color={colors.accent}
              />
              <EmojiText
                txt={`${dr.Reviews?.values?._j?._j?.length} Reviews`}
                icon={"comment-text-multiple"}
                color={colors.accent}
              />
            </Feedback>
          </RowContainer>
          <BookingButtons />
        </InfoContainer>
      </Item>
    </>
  );
};
