import { Text, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { Avatar } from "react-native-paper";
import { styled } from "styled-components/native";
import { DataStore } from "aws-amplify";

import {
  RowContainer,
  Spacer,
  SubtitleText,
  TitleText,
} from "../../infrastructure/theme";
import { DescriptionText } from "../../components/DrItem";
import { ReviewItem } from "../../components/ReviewItem";
import { colors } from "../../infrastructure/theme/colors";
import BookingButtons from "../../components/BookingButtons";
import { Certificate, ConsultantCertificate, Review } from "../../models";
import { formatUpperCase } from "../../functions";

const { width, height } = Dimensions.get("window");

const InfoIconView = styled.View`
  padding: 3px;
  align-items: center;
  justify-jontent: center;
`;

const TagView = styled.View`
  padding-vertical: 4px;
  padding-horizontal: 10px;
  border-radius: 10px;
  margin-right: 3px;
  margin-vertical: 10px;
`;
const TagText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
const LinkText = styled.Text`
  color: ${colors.link};
  font-weight: bold;
`;
const DrImage = styled.Image.attrs({ resizeMode: "cover" })`
  width: ${width}px;
  height: ${height / 2.7}px;
`;
const DrInfo = styled.ScrollView`
  position: absolute;
  top: ${height / 3}px;
  width: ${width}px;
  height: ${height / 1.71}px;
  background-color: ${colors.background};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 10px;
`;
const InfoIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const ReviewContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.surface};
`;

const InfoIcon = ({ icon, label, text }) => (
  <InfoIconView>
    <Avatar.Icon size={54} icon={icon} />
    <SubtitleText>{label}</SubtitleText>
    <DescriptionText>{text}</DescriptionText>
  </InfoIconView>
);
const Tag = ({ item }) => (
  <TagView style={{ backgroundColor: item.color }}>
    <TagText>{formatUpperCase(item.name)}</TagText>
  </TagView>
);

const Link = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <LinkText>{text}</LinkText>
  </TouchableOpacity>
);

const DrProfileScreen = ({ navigation, route }) => {
  const dr = route.params.dr;
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [allReviews, setAllReviews] = useState();
  const [reviews, setReviews] = useState();
  const [certificates, setCertificates] = useState([]);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  const toggleReview = () => {
    setReviews(showAllReviews ? allReviews : allReviews.slice(0, 2));
    setShowAllReviews((show) => !show);
  };

  //Refractor it to a context-----------------------------------------------
  useEffect(() => {
    DataStore.query(ConsultantCertificate, (cc) =>
      cc.consultantId.eq(dr.id)
    ).then((consultantCertificates) => {
      const certificateIds = consultantCertificates.map(
        (cc) => cc.certificateId
      );
      const certificatePromises = certificateIds.map((certificateId) =>
        DataStore.query(Certificate, certificateId)
      );
      Promise.all(certificatePromises).then((certificates) => {
        setCertificates(certificates);
      });
    });

    DataStore.query(Review, (rv) => rv.consultantID.eq(dr.id)).then((rvs) => {
      setAllReviews(rvs);
      setReviews(rvs.slice(0, 2));
    });
  }, [dr.id]);
  // --------------------------------------------------------------------------------------------

  return (
    <InfoContainer>
      <DrImage source={{ uri: dr.picture }} />
      <DrInfo>
        <TitleText>Dr. {dr.full_name}</TitleText>
        <DescriptionText>{formatUpperCase(dr.speciality)}</DescriptionText>
        {!!certificates.length && (
          <RowContainer>
            <FlatList
              data={certificates}
              renderItem={({ item }) => <Tag item={item} />}
              keyExtractor={(item) => item.name}
              horizontal
            />
          </RowContainer>
        )}
        <InfoIconContainer>
          <InfoIcon
            icon="account-group"
            label={dr.nbr_patient}
            text="Patient"
          />
          <InfoIcon
            icon="needle"
            label={`+${dr.experience} ans`}
            text="Experience"
          />
          <InfoIcon
            icon="star-circle"
            label={parseFloat(dr?.score).toFixed(1)}
            text="Notation"
          />
          {!!reviews?.length && (
            <InfoIcon
              icon="comment-processing"
              label={reviews?.length}
              text="Avis"
            />
          )}
          {!!certificates.length && (
            <InfoIcon
              icon="certificate"
              label={certificates.length}
              text="Certificats"
            />
          )}
        </InfoIconContainer>
        <TitleText>A propos de Moi: </TitleText>
        <Text numberOfLines={showAll ? undefined : 2}>{dr.descreprtion}</Text>
        {dr.descreprtion.length > 119 && (
          <Link
            text={showAll ? "View Less" : "View More"}
            onPress={toggleShowAll}
          />
        )}
        <TitleText>Working Time</TitleText>
        <Text>{dr.working_day + " " + dr.working_time}</Text>
        <TitleText>Cost</TitleText>
        <Text>{dr.cost} DZD per 30min Consult</Text>
        {!!reviews?.length && (
          <>
            <ReviewContainer>
              <TitleText>Reviews</TitleText>
              <Link
                text={showAllReviews ? "View all Review" : "View less"}
                onPress={toggleReview}
              />
            </ReviewContainer>
            {reviews?.map((review) => (
              <ReviewItem review={review} key={review.id} />
            ))}
          </>
        )}
        <Spacer size={2} />
      </DrInfo>

      <BookingButtons style={{ paddingLeft: 20 }} />
    </InfoContainer>
  );
};

export default DrProfileScreen;
