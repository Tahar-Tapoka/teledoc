import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Chip,
  SegmentedButtons,
  TextInput,
} from "react-native-paper";

const LoginScreen = () => {
  const [value, setValue] = useState("Patient");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
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
              backgroundColor: value === "Patient" ? "#FF55BB" : "white",
            },
          },
          {
            value: "Consultant",
            label: "Consultant",
            icon: "doctor",
            style: {
              ...styles.segmentBtn,
              backgroundColor: value === "Consultant" ? "#FF55BB" : "white",
            },
          },
        ]}
      />
      <View style={styles.form}>
        <Text style={styles.txt}>{value} Login</Text>
        <TextInput
          label="Mobile Number"
          value={mobile}
          onChangeText={(mobile) => setMobile(mobile)}
          style={styles.txtInput}
          keyboardType="numeric"
          theme={{ colors: { primary: "#FF55BB" } }}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          style={styles.txtInput}
          secureTextEntry
          theme={{ colors: { primary: "#FF55BB" } }}
        />
        <Text>Don't have an account? Register</Text>
        <Button
          icon="login-variant"
          mode="contained"
          onPress={() => console.log(value, " :", mobile, ", ", password)}
          style={styles.btn}
          buttonColor="#FF55BB"
        >
          Login
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // padding: 5,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#C2F2F2",
  },
  avatar: {
    margin: 20,
    marginTop: 50,
    alignSelf: "center",
  },
  segmentBtn: {
    backgroundColor: "red",
    borderColor: "#C2F2F2",
    elevation: 5,
  },
  txt: {
    fontSize: 24,
    fontWeight: "700",
    color: "#EA2FAE",
    marginVertical: 20,
  },
  form: {
    alignItems: "center",
    backgroundColor: "#C2F2F2",
    height: "100%",
  },
  txtInput: {
    width: "80%",
    margin: 15,
  },
  btn: {
    width: "80%",
    margin: 15,
  },
});
