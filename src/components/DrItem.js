import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

import { Review } from "../models";
import {
  NotificationText,
  Rating,
  RowContainer,
  ThemeButton,
  TitleText,
} from "../infrastructure/theme";
import { ReviewItem } from "./ReviewItem";
import { colors } from "../infrastructure/theme/colors";
import { fontSizes, fontWeights, fonts } from "../infrastructure/theme/fonts";
import BookingButtons from "./BookingButtons";

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

export const EmojiText = ({ txt, icon, color }) => (
  <RowContainer>
    <MaterialCommunityIcons name={icon} size={18} color={color} />
    <FeedbackText>{txt}</FeedbackText>
  </RowContainer>
);

export const DrItem = ({ dr, navigation }) => {
  const [reviews, setReviews] = useState([
    {
      id: "7c977c4d-9918-4aea-bedf-ed0fb25baf90",
      description:
        "pUZgrouKS%2F21fQF24aphntmPl7O9rJSHlpZyVlBfyCxGjuQWA12WeGw6OwVpRWO6ICBFkHBAJn9QOnpRjEeAMRr4NCnjKtLx2W9AJXGFi7WztjN5ZBK4AAHeWt80%2BCUFLDrKQAjdOzxYLCxdhwmtCCLjt8Q2h1RkMorG6AB3qxw823sjG5JWlo0b39VrMr%2FRZU3LcLatWIjiCbDhzRqEupJCYeDL%2FKZ61vdrd0%2FNW8RSCsbVMaaiT3wBQOnlyz3tigwDAdagZXJ7f6Kspa3vBgJhkeQYYQXAUgs1e4B8QyBN13Gnpyyvb%2Bnyujs2Yme2dY40R9G6ezx5QtSxvghr9y%2F3xNVcyz%2B4PGdyXhIuwO%2F1INtMyDOZAW%2BJ%2Fr%2F0W1f8swk7vyPe%2FS6vGv3SrKJaO8b9FbvdFrJAr6Nd1Is7xIq%2F4JNmbs2oXrEIOiZrJFgibr89CQSMxt237PI%2BWisAIwurmUxXJsn5QqDsei8E3SUVLF3xLUX33B5eoSlfgDlcyJWQ5UtSmNHpy%2FKrIVnW8h5y%2BG3BdaVaStoIc1gTMPS9uaUGOoUCfPKIN2wDpd1cQHqORmHxewW%2ByDQ7w1Bh4b%2BXTKijl4etHOjFOt4NDlaPiY2KzkGPJ5hQfdrBAIThXdywtOrgP08mMYgpOJKs%2FLHKgpLaprgt1SbC7De7oB8jpe4ZBs8%2BZLShz6OPp7j2up2R5nRc5bFEqQTagXo7mL%2FP7hgVBcBUY61KohYlK8Lvnx9jD2WT%2B3FgF98QdnWYYg85k7UpExiB%2FOgUigutI6KqEm8IsrzL%2Btb6K9a6YF6GhCWrActccbYhPY%2FSJqf68cR5BbZ%2BhmREeUs3tXs7tF%2Bsqr7fS4GDxBexHPhI0HbmEa8FHFXEorgiPyFhlfoQdD3hR8QLjG%2FtBJc%2B&X-Amz-Signature=ee4c374dadcf53d9c18686d82725a2cead176992d0c4fe7d31b78618962bf1f3&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.2%20os%2Fother%20lang%2Fjs%20md%2Fbrowser%2Funknown_unknown%20api%2Fs3%2F3.6.2%20aws-amplify%2F5.2.5_react-native&x-id=GetObject",
      score: 4,
      consultantID: "aabd4d62-10a2-4b67-9fbb-efb608fc4fa6",
      patientID: "6f625d57-6dbf-422b-93bb-a3b064619d36",
      createdAt: "2023-07-17T15:05:52.228Z",
      updatedAt: "2023-07-17T15:05:52.228Z",
    },
  ]); //homie: remove whats inside useState

  // useEffect(() => {
  //   if (dr)
  //     DataStore.query(Review, (rv) => rv.consultantID.eq(dr.id)).then(
  //       setReviews
  //     );
  // }, [dr]);homie: incomment that

  return (
    <>
      <Item>
        {/*onPress={() => navigation.navigate("DrProfileScreen", { dr: dr })} homie: get that back inside item*/}
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
              <Rating rating={parseFloat(dr.score).toFixed(1)} />
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
          <BookingButtons />
        </InfoContainer>
      </Item>
      {/* {reviews?.length ? <TitleText>Reviews</TitleText> : null}
      {reviews?.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))} */}
    </>
  );
};
