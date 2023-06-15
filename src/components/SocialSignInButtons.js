import React from "react";
import { View, Text } from "react-native";
import CustomButton from "./CustomButton";
import { ThemeButton, ThemeButtonText } from "../infrastructure/theme";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };

  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };

  const onSignInApple = () => {
    console.warn("onSignInApple");
  };

  return (
    <>
      <ThemeButton
        onPress={onSignInFacebook}
        icon="facebook"
        buttonColor="#E7EAF4"
        textColor="#4765A9"
      >
        Sign In with Facebook
      </ThemeButton>
      <ThemeButton
        onPress={onSignInGoogle}
        icon="google"
        buttonColor="#FAE9EA"
        textColor="#DD4D44"
      >
        Sign In with Google
      </ThemeButton>
      <ThemeButton
        onPress={onSignInApple}
        icon="apple"
        buttonColor="#e3e3e3"
        textColor="#363636"
      >
        Sign In with Apple
      </ThemeButton>
    </>
  );
};

export default SocialSignInButtons;
