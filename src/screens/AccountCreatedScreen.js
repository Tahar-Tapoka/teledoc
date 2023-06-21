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
import { Auth } from "@aws-amplify/auth";
import { useNavigation } from "@react-navigation/native";
const AccountCreatedScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Avatar.Image
        size={300}
        source={require("../../assets/thumb.png")}
        style={{ backgroundColor: theme.colors.background }}
      />

      <TitleText>Account Created!</TitleText>

      <Text style={{ color: theme.colors.backdrop }}>
        Your account had been created succefully
      </Text>
      <ThemeButton
        textColor="#F1F1F1"
        onPress={() => {
          console.log("yaaaaaay");
          Auth.signOut();
          navigation.navigate("SignIn");
        }}
      >
        <ThemeButtonText>Get Started</ThemeButtonText>
      </ThemeButton>
    </Container>
  );
};

export default AccountCreatedScreen;

const styles = StyleSheet.create({});
