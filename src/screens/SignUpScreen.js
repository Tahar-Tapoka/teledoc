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
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MOBILE_REGEX = /^\+213[5-7][0-9]{8}$/;

const SignUpScreen = () => {
  // const [mobile, setMobile] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");
  // const [errorMessage, setErrorMessage] = useState();
  const [user, setUser] = useState("Patient");
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const navigation = useNavigation();

  const onRegisterPressed = async (data) => {
    const { username, password, email, name } = data;

    // const mob = "+213".concat(mobile.slice(1));
    if (loading) return;
    setLoading(true);
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name },
      });
      navigation.navigate("ConfirmEmail", { username });
    } catch (err) {
      Alert.alert("Oops", err.message);
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

        <CustomInput
          name="name"
          control={control}
          label="Name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Name should be max 24 characters long",
            },
          }}
        />
        <CustomInput
          keyboardType="phone-pad"
          name="username"
          control={control}
          label="Mobile Number"
          rules={{
            required: "Mobile Number is required",
            pattern: {
              value: MOBILE_REGEX,
              message: "Phone Number is invalid",
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          label="Email"
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <CustomInput
          name="password"
          control={control}
          label="Password"
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
          onPress={handleSubmit(onRegisterPressed)}
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
