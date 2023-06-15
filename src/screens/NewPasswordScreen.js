import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
  ThemeView,
  TitleText,
} from "../infrastructure/theme";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate("Home");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ThemeView>
      <Spacer size={4} />
      <TitleText>Reset your password</TitleText>
      <Spacer size={6} />
      <ThemeInput
        label="Confirmation Code"
        value={code}
        onChangeText={(code) => setCode(code)}
        keyboardType="numeric"
      />
      <ThemeInput
        label="New password"
        value={newPassword}
        onChangeText={(pw) => setNewPassword(pw)}
        secureTextEntry
      />

      <ThemeButton
        onPress={onSubmitPressed}
        icon="check-bold"
        textColor="#F1F1F1"
      >
        <ThemeButtonText>Submit</ThemeButtonText>
      </ThemeButton>

      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </ThemeView>
  );
};

export default NewPasswordScreen;
