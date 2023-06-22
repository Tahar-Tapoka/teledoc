import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";
import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
  ThemeView,
  TitleText,
  theme,
} from "../infrastructure/theme";
import SegmentedButton from "../components/SegmentedButton";
import { Avatar } from "react-native-paper";
import Logo from "../../assets/avatar.png";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";

const SignUpScreen = () => {
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("Patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onRegisterPressed = async () => {
    const mob = "+213".concat(mobile.slice(1));
    if (loading) return;
    setLoading(true);
    try {
      await Auth.signUp({
        username: mob,
        password,
        attributes: { email, name: username },
      });
      navigation.navigate("ConfirmEmail", { mob });
    } catch (err) {
      Alert.alert("Oops", err.message);
      setPassword("");
      setErrorMessage(err.message);
    }
    setLoading(false);
    // console.log(mob);
    // navigation.navigate("ConfirmEmail");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.colors.background, flex: 1 }}
    >
      {/* <Avatar.Image size={84} source={Logo} style={styles.logo} /> */}
      <Spacer size={3} />
      <ThemeView>
        <Spacer size={3}>
          <TitleText>Create a {user} account</TitleText>
        </Spacer>
        <View style={{ width: "80%", marginBottom: 10 }}>
          <SegmentedButton user={user} setUser={setUser} />
        </View>

        <ThemeInput
          label="Mobile Number"
          value={mobile}
          onChangeText={(mobile) => setMobile(mobile)}
          keyboardType="phone-pad"
          error={mobile && errorMessage}
          // style={
          //   mobile || !errorMessage
          //     ? null
          //     : { backgroundColor: theme.colors.error }
          // }
        />
        <ThemeInput
          label="Username"
          value={username}
          onChangeText={(username) => setUsername(username)}
          style={
            username || !errorMessage
              ? null
              : { backgroundColor: theme.colors.error }
          }
        />
        <ThemeInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={
            email || !errorMessage
              ? null
              : { backgroundColor: theme.colors.error }
          }
        />
        <ThemeInput
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
          style={
            password || !errorMessage
              ? null
              : { backgroundColor: theme.colors.error }
          }
        />
        <ThemeInput
          label="Repeat Password"
          value={passwordRepeat}
          secureTextEntry
          onChangeText={(password) => setPasswordRepeat(password)}
          style={
            passwordRepeat || !errorMessage
              ? null
              : { backgroundColor: theme.colors.error }
          }
        />
        <ThemeButton
          onPress={onRegisterPressed}
          icon={loading ? null : "account-plus"}
          textColor="#F1F1F1"
          loading={loading}
        >
          <ThemeButtonText>Register</ThemeButtonText>
        </ThemeButton>

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    margin: 10,
  },
  link: {
    color: "#FDB075",
  },
  logo: {
    marginTop: theme.space[6],
    alignSelf: "center",
  },
});

export default SignUpScreen;
