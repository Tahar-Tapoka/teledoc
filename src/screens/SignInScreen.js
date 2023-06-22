import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Logo from "../../assets/avatar.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { Container } from "aws-amplify-react-native";
import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
  ThemeView,
  TitleText,
  theme,
} from "../infrastructure/theme";
import { Avatar, SegmentedButtons } from "react-native-paper";
import SegmentedButton from "../components/SegmentedButton";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";

const SignInScreen = () => {
  const [user, setUser] = useState("Patient");
  // const [mobile, setMobile] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();
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
    // validate user
    // navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <Avatar.Image size={120} source={Logo} style={styles.logo} />
      <SegmentedButton user={user} setUser={setUser} />

      <ThemeView>
        <Spacer size={3} />
        <TitleText>{user} Login</TitleText>
        <Spacer size={2} />
        <CustomInput
          name="username"
          label="Mobile Number"
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
          <ThemeButtonText>Sign In</ThemeButtonText>
        </ThemeButton>

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
      </ThemeView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  logo: {
    marginTop: theme.space[6],
    alignSelf: "center",
  },
});

export default SignInScreen;
