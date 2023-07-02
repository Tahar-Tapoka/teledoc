import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { Auth } from "aws-amplify";
import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
  ThemeView,
  TitleText,
} from "../../infrastructure/theme";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSendPressed = async (data) => {
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate("NewPassword", { username: data.username });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ThemeView>
      <Spacer size={4} />
      <TitleText>Reset your password</TitleText>
      <Spacer size={6} />
      <CustomInput
        name="username"
        control={control}
        label="Mobile number"
        rules={{
          required: "Username is required",
        }}
        keyboardType="phone-pad"
      />
      <ThemeButton
        onPress={handleSubmit(onSendPressed)}
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
