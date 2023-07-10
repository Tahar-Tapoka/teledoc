import { Text, Keyboard, Alert, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { Auth, DataStore, Storage } from "aws-amplify";
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
  ThemeScroll,
  ThemeView,
  TitleText,
} from "../../infrastructure/theme";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";
// import moment from "moment/moment";

const MOBILE_REGEX = /^[0]{1}[5-7]{1}[0-9]{8}$/; ///^\[0][5-7][0-9]{8}$/;

export const ProfileScreen = ({ navigation }) => {
  const { sub, setDbUser, dbUser } = useAuthContext();
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm({
    defaultValues: {
      username: dbUser?.username,
      address: dbUser?.address,
      // birthDate: dbUser?.date_of_birth,
      fullName: dbUser?.full_name,
      mobile: dbUser?.mobile,
    },
  });

  const [gender, setGender] = useState(dbUser?.gender || Gender.MALE);
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState(dbUser?.lat?.toString() || "0");
  const [lng, setLng] = useState(dbUser?.lng?.toString() || "0");
  const [birthday, setBirthday] = useState(new Date(dbUser?.date_of_birth));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [photo, setPhoto] = useState(dbUser?.picture);

  const isFormDirty =
    Object.keys(dirtyFields).length > 0 ||
    birthday.toISOString().split("T")[0] !== dbUser?.date_of_birth ||
    gender !== dbUser?.gender; // ||
  // photo.toString() !== dbUser?.picture.toString();

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
          updated.picture = photo;
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
    navigation.navigate("AccountCreated", { user: dbUser?.username });
  };

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date !== undefined) {
      setBirthday(date);
      console.log(birthday.toISOString().split("T")[0]);
    }
  };

  const handleToggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  useEffect(() => {
    getProfilePicture();
    // console.log(photo);
  }, [photo]);

  const getProfilePicture = async () => {
    try {
      const url = await Storage.get(`${dbUser.id}-photo.jpg`);
      setPhoto(url);
    } catch (error) {
      console.log("Error retrieving profile picture:", error);
    }
  };

  return (
    <ThemeScroll>
      <ThemeView>
        <Spacer size={4} />
        <TitleText>Profile</TitleText>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CameraScreen");
            }}
          >
            {!photo ? (
              <Avatar.Icon
                size={120}
                icon="human"
                backgroundColor={colors.error}
              />
            ) : (
              <Avatar.Image size={180} source={{ uri: photo }} />
            )}
          </TouchableOpacity>
        </View>
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
            pattern: {
              value: MOBILE_REGEX,
              message: "Phone Number is invalid",
            },
          }}
          keyboardType="phone-pad"
        />
        <Pressable
          onPress={handleToggleDatePicker}
          style={{ width: "100%", alignItems: "center" }}
        >
          <ThemeInput
            value={birthday?.toLocaleDateString("fr-FR")}
            label={"Date of Birth"}
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
        <CustomInput name="address" control={control} label="Address" />
        <RowContainer>
          <SubtitleText>Gender : </SubtitleText>
          <View style={{ width: "45%", marginLeft: 70 }}>
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
          disabled={!isFormDirty}
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
        <Spacer size={3} />
      </ThemeView>
    </ThemeScroll>
  );
};

export default ProfileScreen;
