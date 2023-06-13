import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Container,
  ThemeButton,
  ThemeButtonText,
  TitleText,
  theme,
} from "../infrastructure/theme";
import { Avatar } from "react-native-paper";

const AccountCreatedScreen = () => {
  return (
    <Container>
      <Avatar.Image
        size={300}
        source={require("../assets/thumb.png")}
        style={{ backgroundColor: theme.colors.background }}
      />

      <TitleText>Account Created!</TitleText>

      <Text style={{ color: theme.colors.backdrop }}>
        Your account had been created succefully
      </Text>
      <ThemeButton
        onPress={() => {
          console.log("yaaaaaay");
        }}
      >
        <ThemeButtonText>Get Started</ThemeButtonText>
      </ThemeButton>
    </Container>
  );
};

export default AccountCreatedScreen;

const styles = StyleSheet.create({});
