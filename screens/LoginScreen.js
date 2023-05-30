import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, SegmentedButtons } from "react-native-paper";

const LoginScreen = () => {
  const [value, setValue] = useState("");
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
          { value: "person", label: "Patient" },
          { value: "doctor", label: "Consultant" },
        ]}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C2F2F2",
  },
  avatar: {
    margin: 15,
  },
});
