import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import {
  Avatar,
  Button,
  SegmentedButtons,
  TextInput,
} from "react-native-paper";
import {
  Container,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
  TitleText,
  theme,
} from "../infrastructure/theme";

const LoginScreen = () => {
  const [value, setValue] = useState("Patient");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container>
        <Avatar.Image
          size={96}
          source={require("../assets/avatar.png")}
          style={styles.avatar}
        />
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: "Patient",
              label: "Patient",
              icon: "emoticon-sick-outline",
              style: {
                ...styles.segmentBtn,
                backgroundColor:
                  value === "Patient" ? theme.colors.primary : "white",
              },
            },
            {
              value: "Consultant",
              label: "Consultant",
              icon: "doctor",
              style: {
                ...styles.segmentBtn,
                backgroundColor:
                  value === "Consultant" ? theme.colors.primary : "white",
              },
            },
          ]}
        />
        <View style={styles.form}>
          <TitleText>{value} Login</TitleText>
          <ThemeInput
            label="Mobile Number"
            value={mobile}
            onChangeText={(mobile) => setMobile(mobile)}
            keyboardType="numeric"
          />
          <ThemeInput
            label="Password"
            value={password}
            onChangeText={(pass) => setPassword(pass)}
            secureTextEntry
          />

          <Text style={{ marginTop: 15 }}>Don't have an account? Register</Text>
          <ThemeButton
            icon="login-variant"
            onPress={() => {
              console.log(value, " :", mobile, ", ", password);
            }}
          >
            <ThemeButtonText>Login</ThemeButtonText>
          </ThemeButton>
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 5,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#C2F2F2",
  },
  avatar: {
    marginTop: theme.space[6],
    alignSelf: "center",
  },
  segmentBtn: {
    borderWidth: 0,
    backgroundColor: theme.colors.background,
    elevation: 5,
    marginTop: theme.space[5],
  },
  form: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.background,
    height: "100%",
    width: "100%",
  },
});
