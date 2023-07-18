import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Patient } from "../models";
import Logo from "../../assets/user.png";
import { Avatar } from "react-native-paper";
import RatingBar from "./RatingBar";
import { NotificationText } from "../infrastructure/theme";

export const ReviewItem = ({ review }) => {
  const [patient, setPatient] = useState();
  useEffect(() => {
    if (review) DataStore.query(Patient, review.patientID).then(setPatient);
  }, [review]);
  return (
    <View style={styles.item}>
      {/* Logo ------------------------------------------*/}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Avatar.Icon size={24} icon={"account"} />
        <NotificationText>{patient?.username}</NotificationText>
      </View>
      <View style={styles.info}>
        <RatingBar rating={review.score} disabled />
        <Text style={styles.description}>{review.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: "pink",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    margin: 10,
  },
  image: {
    width: "20%",
    height: "30%",
    margin: 3,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
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
