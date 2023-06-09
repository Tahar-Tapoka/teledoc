import React, { useState } from "react";
import { Text } from "react-native";
import { Avatar } from "react-native-paper";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";

import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeScroll,
  ThemeView,
  TitleText,
  theme,
} from "../../infrastructure/theme";
import Logo from "../../../assets/avatar.png";
import Thumb from "../../../assets/thumb.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const SignInScreen = ({ route, navigation }) => {
  const newAccount = route?.params?.newAccount;
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    if (loading) return;
    setLoading(true);
    try {
      await Auth.signIn(data.username, data.password);
    } catch (err) {
      Alert.alert("Oops", err.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ThemeScroll>
      <ThemeView>
        <Spacer size={2} />
        <Avatar.Image size={180} source={newAccount ? Thumb : Logo} />
        {/* <SegmentedButton user={user} setUser={setUser} /> */}

        {/* <Spacer size={3} /> */}
        {newAccount ? (
          <>
            <TitleText>Account Created!</TitleText>
            <Text style={{ color: theme.colors.backdrop }}>
              Your account had been created succefully
            </Text>
          </>
        ) : (
          <TitleText>Login</TitleText>
        )}
        <Spacer size={2} />
        <CustomInput
          name="username"
          label="Email"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomInput
          name="password"
          label="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be minimum 6 characters long",
            },
          }}
        />

        <ThemeButton
          onPress={handleSubmit(onSignInPressed)}
          icon={loading ? null : "login-variant"}
          textColor="#F1F1F1"
          loading={loading}
        >
          <ThemeButtonText>
            {newAccount ? "Get Started" : "Sign In"}
          </ThemeButtonText>
        </ThemeButton>

        {!newAccount && (
          <>
            <CustomButton
              text="Forgot password?"
              onPress={onForgotPasswordPressed}
              type="TERTIARY"
            />
            <SocialSignInButtons />

            <CustomButton
              text="Don't have an account? Create one"
              onPress={onSignUpPress}
              type="TERTIARY"
            />
          </>
        )}
      </ThemeView>
    </ThemeScroll>
  );
};

export default SignInScreen;
