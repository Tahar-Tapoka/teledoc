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

const SignInScreen = () => {
  const [user, setUser] = useState("Patient");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = async (username, password) => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await Auth.signIn(username, password);
      console.log(response);
    } catch (err) {
      Alert.alert("Oops", err.message);
      setMobile("");
      setPassword("");
      setErrorMessage(err.message);
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.colors.background, flex: 1 }}
    >
      <Avatar.Image size={120} source={Logo} style={styles.logo} />
      <SegmentedButton user={user} setUser={setUser} />

      <ThemeView>
        <Spacer size={3} />
        <TitleText>{user} Login</TitleText>
        <Spacer size={2} />
        <ThemeInput
          label="Mobile Number"
          value={mobile}
          onChangeText={(mobile) => setMobile(mobile)}
          keyboardType="numeric"
          style={!errorMessage ? null : { backgroundColor: theme.colors.error }}
        />
        <ThemeInput
          label="Password"
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          secureTextEntry
          style={!errorMessage ? null : { backgroundColor: theme.colors.error }}
        />
        {errorMessage && (
          <Text style={{ color: theme.colors.error }}>{errorMessage}</Text>
        )}

        <ThemeButton
          onPress={() => onSignInPressed(mobile, password)}
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
    alignItems: "center",
    padding: 20,
  },
  logo: {
    marginTop: theme.space[6],
    alignSelf: "center",
  },
  segmentBtn: {
    borderWidth: 0,
    backgroundColor: theme.colors.background,
    elevation: 5,
    marginTop: theme.space[3],
  },
});

export default SignInScreen;
