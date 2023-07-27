import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import {
  RowContainer,
  SubtitleText,
  TitleText,
} from "../../infrastructure/theme";
import { Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import { DescriptionText } from "../../components/DrItem";
import { Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import dataReviews from "../../../assets/review.json";
import { ReviewItem } from "../../components/ReviewItem";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import BookingButtons from "../../components/BookingButtons";
import { Certificate, ConsultantCertificate, Review } from "../../models";
import { formatUpperCase } from "../../functions";
const { width, height } = Dimensions.get("window");
const InfoIcon = ({ icon, label, text }) => (
  <View
    style={{
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Avatar.Icon size={54} icon={icon} />
    <SubtitleText>{label}</SubtitleText>
    <DescriptionText>{text}</DescriptionText>
  </View>
);
export const Tag = ({ item }) => (
  <View style={[styles.tag, { backgroundColor: item.color }]}>
    <Text style={styles.tagText}>{item.name}</Text>
  </View>
);

const Link = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{ color: colors.link, fontWeight: fontWeights.bold }}>
      {text}
    </Text>
  </TouchableOpacity>
);

const DrProfileScreen = ({ navigation, route }) => {
  const dr = route.params.dr;
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [allReviews, setAllReviews] = useState();
  const [reviews, setReviews] = useState();
  const [certificates, setCertificates] = useState([]);

  // const consultantCertificates = dr.Certificates.values._j._j;

  // const revs = dr?.Reviews?.values?._j._j?.slice(0, 2);

  //Refractor it to a context-----------------------------------------------

  useEffect(() => {
    // Get the associated ConsultantCertificates objects for the given consultant
    DataStore.query(ConsultantCertificate, (cc) =>
      cc.consultantId.eq(dr.id)
    ).then((consultantCertificates) => {
      // Get the Certificate objects based on the ConsultantCertificates
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

  // const fetchLimitedReviews = async () => {
  //   try {
  //     const limitedReviews = await DataStore.query(
  //       Review,
  //       (rv) => rv.consultantID.eq(dr.id),
  //       {
  //         limit: 2, // Fetch only 2 reviews
  //       }
  //     );
  //     setReviews(limitedReviews);
  //   } catch (error) {
  //     console.error("Error fetching reviews:", error);
  //   }
  // };
  // const fetchAllReviews = async () => {
  //   try {
  //     const allReviews = await DataStore.query(Review, (rv) =>
  //       rv.consultantID.eq(dr.id)
  //     );
  //     setReviews(allReviews);
  //     setShowAllReviews(true);
  //   } catch (error) {
  //     console.error("Error fetching reviews:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchLimitedReviews();
  // }, []);
  //------------------------------------------------------------

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  const toggleReview = () => {
    setReviews(showAllReviews ? allReviews : allReviews.slice(0, 2));
    setShowAllReviews((show) => !show);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <ImageBackground
          source={{ uri: dr.picture }}
          style={{
            width,
            height: height / 2.8,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        ></ImageBackground>
      </View>
      <ScrollView
        style={{
          flexWrap: "wrap",
          flex: 1,
          position: "absolute",
          top: height / 3,
          width: width,
          maxHeight: height / 1.55,
          backgroundColor: colors.background,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          padding: 10,
        }}
      >
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
        <RowContainer style={{ justifyContent: "space-evenly" }}>
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
          <InfoIcon
            icon="comment-processing"
            label={reviews?.length}
            text="Avis"
          />
          {!!certificates.length && (
            <InfoIcon
              icon="certificate"
              label={certificates.length}
              text="Certificats"
            />
          )}
        </RowContainer>
        <TitleText>A propos de Moi: </TitleText>
        {/* <Text numberOfLines={seeMore ? undefined : 2}>{dr.descreprtion}</Text>
        <Link
          onPress={toggleDescription}
          text={seeMore ? "Voir Moins" : "Voir Plus"}
        /> */}
        <View>
          <Text numberOfLines={showAll ? undefined : 2}>{dr.descreprtion}</Text>
          {dr.descreprtion.length > 119 && (
            <TouchableOpacity onPress={toggleShowAll}>
              <Text style={{ color: "blue", marginTop: 5 }}>
                {showAll ? "View Less" : "View More"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <TitleText>Working Time</TitleText>
        <Text>{dr.working_day + " " + dr.working_time}</Text>
        <TitleText>Cost</TitleText>
        <Text>{dr.cost} DZD per 30min Consult</Text>
        {!!reviews?.length && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TitleText>Reviews</TitleText>
              <Link
                text={!showAllReviews ? "View all Review" : "View less"}
                onPress={toggleReview}
              />
            </View>
            {reviews?.map((review) => (
              <ReviewItem review={review} key={review.id} />
            ))}
          </>
        )}
      </ScrollView>
      <View
        style={{
          paddingLeft: 20,
          backgroundColor: "rgba(128, 128, 128, 0.5)",
        }}
      >
        <BookingButtons />
      </View>
    </View>
  );
};

export default DrProfileScreen;

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    // flexWrap: "wrap",
  },
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 3,
    marginVertical: 10,
  },
  tagText: {
    color: "white",
    fontWeight: "bold",
  },
});
