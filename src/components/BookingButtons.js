import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RowContainer, ThemeButton } from "../infrastructure/theme";
import { colors } from "../infrastructure/theme/colors";

const onVideoConsult = () => console.warn("Book Video Consult");
const onBookAppointement = () => console.warn("Book an Appointement");
const BookingButtons = ({ style }) => (
  <RowContainer style={{ ...style, flexWrap: "wrap", marginVertical: 5 }}>
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
);

export default BookingButtons;

const styles = StyleSheet.create({});
