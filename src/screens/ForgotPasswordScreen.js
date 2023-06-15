import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
  ThemeView,
  TitleText,
} from "../infrastructure/theme";

const ForgotPasswordScreen = () => {
  const [mobile, setMobile] = useState("");

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate("NewPassword");
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
        label="Mobile Number"
        value={mobile}
        onChangeText={(mobile) => setMobile(mobile)}
        keyboardType="numeric"
      />
      <ThemeButton
        onPress={onSendPressed}
        icon="send-check"
        textColor="#F1F1F1"
      >
        <ThemeButtonText>Send</ThemeButtonText>
      </ThemeButton>

      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </ThemeView>
  );
};

export default ForgotPasswordScreen;
