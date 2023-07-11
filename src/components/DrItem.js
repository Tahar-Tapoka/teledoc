import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Review, User } from "../models";
import { RowContainer } from "../infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";

export const DrItem = ({ dr, navigation }) => {
  const [review, setReview] = useState();
  useEffect(() => {
    if (dr)
      DataStore.query(Review, (rv) => rv.consultantID.eq(dr.id)).then(
        setReview
      );
  }, [dr]);
  return (
    <View style={styles.item}>
      <Image source={{ uri: dr.picture }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>Dr. {dr.full_name}</Text>
        <Text style={styles.description}>{dr.address}</Text>
        <Text style={styles.subtitle}>Speciality:</Text>
        <Text style={styles.description}>{dr.speciality}</Text>
        {review && (
          <Text style={styles.description}>{review?.description}</Text>
        )}
        <RowContainer>
          <Text style={{ marginRight: 5 }}>{dr.score.toFixed(1)}</Text>
          <Ionicons name="star" size={16} color="gold" />
        </RowContainer>
        <RowContainer>
          <Text style={{ marginRight: 5 }}>{dr.nbr_patient}</Text>
          <Text style={{ marginLeft: 5 }}>Patient</Text>
        </RowContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 5,
  },
  image: {
    width: "20%",
    margin: 3,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  info: {
    marginLeft: 5,
    flex: 1,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    color: "grey",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 7,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    marginLeft: "auto",
    backgroundColor: "green",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});
