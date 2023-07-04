import { Text, Keyboard, Alert, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Patient, Gender } from "../../models";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import SegmentedButton from "../../components/SegmentedButton";
import {
  RowContainer,
  Spacer,
  SubtitleText,
  ThemeButton,
  ThemeButtonText,
  ThemeInput,
  ThemeView,
  TitleText,
} from "../../infrastructure/theme";
import { View } from "react-native";
// import moment from "moment/moment";

const MOBILE_REGEX = /^[0]{1}[5-7]{1}[0-9]{8}$/; ///^\[0][5-7][0-9]{8}$/;

export const ProfileScreen = ({ navigation }) => {
  const { sub, setDbUser, dbUser } = useAuthContext();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: dbUser?.username,
      address: dbUser?.address,
      // birthDate: dbUser?.date_of_birth,
      fullName: dbUser?.full_name,
      mobile: dbUser?.mobile,
      picture: dbUser?.picture,
    },
  });
  const [gender, setGender] = useState(dbUser?.gender || Gender.MALE);
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState(dbUser?.lat?.toString() || "0");
  const [lng, setLng] = useState(dbUser?.lng?.toString() || "0");
  const [birthday, setBirthday] = useState(new Date(dbUser?.date_of_birth));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSave = async (data) => {
    if (loading) return;
    setLoading(true);
    try {
      const original = await DataStore.query(Patient, dbUser.id);
      const user = await DataStore.save(
        Patient.copyOf(original, (updated) => {
          updated.email = original.email;
          updated.mobile = data.mobile;
          updated.full_name = data.fullName;
          updated.gender = gender;
          updated.picture = data.picture;
          updated.date_of_birth = birthday.toISOString().split("T")[0];
          updated.address = data.address;
          updated.username = data.username;
          updated.lat = parseFloat(lat);
          updated.lng = parseFloat(lng);
        })
      );
      setDbUser(user);
    } catch (e) {
      Alert.alert("Oops! ", e.message);
    }
    setLoading(false);
    Keyboard.dismiss();
    // navigation.navigate('AccountCreated', {user:dbUser?.username});
  };

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date !== undefined) {
      setBirthday(date);
      const aws = birthday.toDateString().split("T")[0];
      // console.log(birthday.split("T")[0]);
      console.log(birthday.toISOString().split("T")[0]);
    }
  };

  const handleToggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <ThemeView>
      <Spacer size={4} />
      <TitleText>Profile</TitleText>
      <SubtitleText>{dbUser?.email}</SubtitleText>
      <CustomInput
        name="username"
        control={control}
        label="Username"
        rules={{
          required: "Full Name is required",
          minLength: {
            value: 3,
            message: "Full Name should be at least 5 characters long",
          },
          maxLength: {
            value: 15,
            message: "Full Name should be max 32 characters long",
          },
        }}
      />
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
      <CustomInput
        name="mobile"
        control={control}
        label="Phone Number"
        rules={{
          required: "Phone Number is required",
          pattern: { value: MOBILE_REGEX, message: "Phone Number is invalid" },
        }}
        keyboardType="phone-pad"
      />
      <Pressable
        onPress={handleToggleDatePicker}
        style={{ width: "100%", alignItems: "center" }}
      >
        <ThemeInput
          value={birthday?.toLocaleDateString("fr-FR")}
          // value={ }
          // onChangeText={() => setBirthday}
          // onBlur={onBlur}
          label={"Date of Birth"}
          // style={error && { backgroundColor: theme.colors.error }}
          editable={false}
        />
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={birthday}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
          maximumDate={new Date()}
          minimumDate={new Date("1920-1-1")}
        />
      )}
      {/* should be a date picker or something ?? */}
      <CustomInput name="address" control={control} label="Address" />
      <CustomInput name="picture" control={control} label="Picture" />
      <RowContainer>
        <SubtitleText>Gender : </SubtitleText>
        <View style={{ width: "60%", marginLeft: "auto" }}>
          <SegmentedButton
            user={gender}
            setUser={setGender}
            value1={Gender.MALE}
            value2={Gender.FEMALE}
          />
        </View>
      </RowContainer>
      <Spacer size={2} />
      <ThemeButton
        onPress={handleSubmit(onSave)}
        icon={loading ? null : "check-all"}
        textColor="#F1F1F1"
        loading={loading}
      >
        <ThemeButtonText>
          {!dbUser?.username ? "Save" : "Update"}
        </ThemeButtonText>
      </ThemeButton>
      <ThemeButton
        onPress={() => Auth.signOut()}
        icon="logout"
        buttonColor="#e3e3e3"
        textColor="#363636"
      >
        Logout
      </ThemeButton>
    </ThemeView>
  );
};

export default ProfileScreen;
