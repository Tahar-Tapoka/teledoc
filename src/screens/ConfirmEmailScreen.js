import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/core";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
  ThemeView,
  TitleText,
  theme,
} from "../infrastructure/theme";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate("Home");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onResendPress = () => {
    console.warn("onResendPress");
  };

  return (
    <ThemeView>
      <Spacer size={6}>
        <TitleText>Confirm your email</TitleText>
      </Spacer>
      <ThemeInput
        label="Confirmation Code"
        value={code}
        onChangeText={(code) => setCode(code)}
      />
      <ThemeButton
        onPress={onConfirmPressed}
        icon="check-bold"
        textColor="#F1F1F1"
      >
        <ThemeButtonText>Confirm</ThemeButtonText>
      </ThemeButton>
      <ThemeButton
        onPress={onResendPress}
        icon="check-bold"
        buttonColor={theme.colors.accent}
        textColor={theme.colors.primary}
      >
        <ThemeButtonText style={{ color: theme.colors.primary }}>
          Resend code
        </ThemeButtonText>
      </ThemeButton>

      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </ThemeView>
  );
};

export default ConfirmEmailScreen;
