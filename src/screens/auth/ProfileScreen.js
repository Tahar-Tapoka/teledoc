import { Auth } from "@aws-amplify/auth";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import { Button, Divider } from "react-native-paper";
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { Patient, Gender } from "../../models";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";

export const Profile = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const { sub, setDbUser, dbUser } = useAuthContext();
  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat.toString() || "0");
  const [lng, setLng] = useState(dbUser?.lng.toString() || "0");

  const onSave = async (data) => {
    if (!dbUser) {
      ////create user
      try {
        DataStore.save(
          new User({
            mobile: data.mobile, //get it from dbUser
            full_name: data.fullName,
            gender: data.gender,
            email: data.email,
            picture: data.picture,
            date_of_birth: data.birthDate,
            address: data.address,
            username: data.username,
            lat: parseFloat(lat),
            lng: parseFloat(lng),
            sub,
          })
        ).then(setDbUser);
      } catch (e) {
        Alert.alert("Oops: ", e.message);
      }
    } else {
      ////update user
      try {
        const original = await DataStore.query(Patient, dbUser.id);
        const user = await DataStore.save(
          Patient.copyOf(original, (updated) => {
            updated.full_name = data.fullName;
            updated.gender = data.gender;
            updated.email = data.email;
            updated.picture = data.picture;
            updated.date_of_birth = data.birthDate;
            updated.address = data.address;
            updated.username = data.username;
            updated.lat = parseFloat(lat);
            updated.lng = parseFloat(lng);
          })
        );

        setDbUser(user);
        console.log(user);
      } catch (e) {
        Alert.alert("Oops! ", e.message);
      }
    }
    navigation.goBack();
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <CustomInput
        name="fullName"
        control={control}
        label="Full Name"
        rules={{
          required: "Full Name is required",
          minLength: {
            value: 5,
            message: "Full Name should be at least 5 characters long",
          },
          maxLength: {
            value: 32,
            message: "Full Name should be max 32 characters long",
          },
        }}
      />
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={handleSubmit(onSave)}>
        {!dbUser ? "Save" : "Update"}
      </Button>
      <Divider />
      <Button mode="contained" onPress={Auth.signOut}>
        Sign Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
