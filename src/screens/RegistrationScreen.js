import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Container,
  RowContainer,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
} from "../../infrastructure/theme";
import { RadioButton } from "react-native-paper";

const RegistrationScreen = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [pin, setPin] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  return (
    <Container>
      <ThemeInput
        label="Name"
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <ThemeInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <ThemeInput
        label="Mobile"
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
      <ThemeInput
        label="Confirm your Password"
        value={confirmPass}
        onChangeText={(pass) => setConfirmPass(pass)}
        secureTextEntry
      />
      <RowContainer>
        <ThemeInput
          label="State"
          value={state}
          onChangeText={(name) => setState(name)}
          style={{ width: "45%" }}
        />
        <ThemeInput
          label="City"
          value={city}
          onChangeText={(name) => setCity(name)}
          style={{ width: "45%" }}
        />
      </RowContainer>
      <ThemeInput
        label="Pincode"
        value={pin}
        onChangeText={(mobile) => setPin(mobile)}
        keyboardType="numeric"
      />
      <RowContainer>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Gender: </Text>
        <RadioButton
          value="Male"
          status={gender === "Male" ? "checked" : "unchecked"}
          onPress={() => setGender("Male")}
        />
        <Text>Male</Text>
        <RadioButton
          value="Female"
          status={gender === "Female" ? "checked" : "unchecked"}
          onPress={() => setGender("Female")}
        />
        <Text>Female</Text>
      </RowContainer>
      <ThemeButton
        icon="login-variant"
        onPress={() => {
          console.log(mobile, ", ", password);
        }}
      >
        <ThemeButtonText>Register</ThemeButtonText>
      </ThemeButton>
    </Container>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({});
