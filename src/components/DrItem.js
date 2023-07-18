import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

import { Review } from "../models";
import {
  NotificationText,
  RowContainer,
  ThemeButton,
  TitleText,
} from "../infrastructure/theme";
import { ReviewItem } from "./ReviewItem";
import { colors } from "../infrastructure/theme/colors";
import { fontSizes, fontWeights, fonts } from "../infrastructure/theme/fonts";

export const Item = styled.TouchableOpacity`
  border-color: ${colors.accent};
  border-width: 2px;
  border-radius: 10px;
  flex-direction: row;
  margin-top: 5px;
  background-color: ${colors.background};
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

// export const Link = styled.Pressable`
//   border-color: ${colors.accent};
//   border-width: 1px;
//   border-radius: 10px;
// `;
export const Feedback = styled.View`
  margin-left: auto;
  margin-right: 25px;
  justify-content: center;
`;
export const FeedbackText = styled.Text`
  margin-left: 5px;
  font-weight: ${fontWeights.bold};
  margin-vertical: 3px;
`;

export const Rating = ({ rating }) => (
  <RowContainer>
    <MaterialCommunityIcons name="star" size={18} color={"#FAC213"} />
    <FeedbackText>{rating.toFixed(1)}</FeedbackText>
  </RowContainer>
);
export const EmojiText = ({ txt, icon, color }) => (
  <RowContainer>
    <MaterialCommunityIcons name={icon} size={18} color={color} />
    <FeedbackText>{txt}</FeedbackText>
  </RowContainer>
);

export const DrItem = ({ dr, navigation }) => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    if (dr)
      DataStore.query(Review, (rv) => rv.consultantID.eq(dr.id)).then(
        setReviews
      );
  }, [dr]);

  const onVideoConsult = () => console.warn("Book Video Consult");
  const onBookAppointement = () => console.warn("Book an Appointement");

  return (
    <>
      <Item onPress={() => navigation.navigate("DrProfileScreen", { dr: dr })}>
        <DrImage source={{ uri: dr.picture }} />
        <InfoContainer>
          <TitleText>Dr. {dr.full_name}</TitleText>
          <RowContainer>
            <Info>
              <DescriptionText>{dr.speciality}</DescriptionText>
              {/* dr.speciality.charAt(0) + dr.speciality.slice(1).toLowerCase() */}
              <NotificationText>x Years of Experience</NotificationText>
              {/* <Link
            onPress={() => navigation.navigate("DrProfileScreen", { dr: dr })}
          >
            <EmojiText
              txt="View Profile"
              icon="open-in-new"
              color={colors.link}
            />
          </Link> */}
            </Info>

            <Feedback>
              <Rating rating={dr.score} />
              <EmojiText
                txt={`${dr.nbr_patient} Patient`}
                icon={"emoticon-sick"}
                color={colors.accent}
              />
              <EmojiText
                txt={`${reviews?.length} Reviews`}
                icon={"comment-text-multiple"}
                color={colors.accent}
              />
            </Feedback>
          </RowContainer>
          <RowContainer style={{ flexWrap: "wrap", marginVertical: 5 }}>
            <ThemeButton
              onPress={onVideoConsult}
              icon="message-video"
              buttonColor={colors.primary} //"#E7EAF4"
              textColor="#E7EAF4"
              style={{ maxWidth: "45%" }}
            >
              Video Consult
            </ThemeButton>
            <ThemeButton
              onPress={onBookAppointement}
              icon="calendar-account-outline"
              buttonColor={colors.accent} //"#E7EAF4"
              textColor="#E7EAF4"
              style={{ maxWidth: "45%" }}
            >
              Appointement
            </ThemeButton>
          </RowContainer>
        </InfoContainer>
      </Item>
      {/* {reviews?.length ? <TitleText>Reviews</TitleText> : null}
      {reviews?.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))} */}
    </>
  );
};
