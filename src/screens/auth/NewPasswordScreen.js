import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
  ThemeView,
  TitleText,
} from "../../infrastructure/theme";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import { Alert } from "react-native";

const NewPasswordScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const navigation = useNavigation();
  const route = useRoute();

  const onSubmitPressed = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(
        route?.params.username,
        data.code,
        data.password
      );
      navigation.navigate("SignIn"); //sould be home screen for current user
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
        name="code"
        control={control}
        label="Confirmation Code"
        rules={{
          required: "Confirmation Code is required",
        }}
        keyboardType="numeric"
      />
      <CustomInput
        name="password"
        control={control}
        label="New Password"
        secureTextEntry
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password should be at least 8 characters long",
          },
        }}
      />
      <CustomInput
        name="password-repeat"
        control={control}
        label="Repeat Password"
        secureTextEntry
        rules={{
          validate: (value) => value === pwd || "Password do not match",
        }}
      />

      <ThemeButton
        onPress={handleSubmit(onSubmitPressed)}
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
