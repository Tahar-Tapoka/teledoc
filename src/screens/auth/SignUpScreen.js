import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeView,
  TitleText,
  theme,
} from "../../infrastructure/theme";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = ({ navigation }) => {
  // const [user, setUser] = useState("Patient");
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const onRegisterPressed = async (data) => {
    const { password, email } = data;

    // const mob = "+213".concat(mobile.slice(1));
    if (loading) return;
    setLoading(true);
    try {
      const user = await Auth.signUp({
        username: email,
        password,
        // attributes: { email, name },
      });
      navigation.navigate("ConfirmEmail", {
        username: email,
        sub: user.userSub,
      });
    } catch (err) {
      Alert.alert("Oops", err.message);
    }
    setLoading(false);
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onTermsOfUsePressed = () => {
    navigation.navigate("Policies", { policy: false });
  };

  const onPrivacyPressed = () => {
    navigation.navigate("Policies", { policy: true });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.colors.background, flex: 1 }}
    >
      <ThemeView>
        <Spacer size={6}>
          <TitleText>Create a new account</TitleText>
        </Spacer>
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
