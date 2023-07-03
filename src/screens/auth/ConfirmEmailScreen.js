import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeView,
  TitleText,
  theme,
} from "../../infrastructure/theme";
import { Alert } from "react-native";
import { Auth, DataStore } from "aws-amplify";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import { Patient } from "../../models";

const ConfirmEmailScreen = () => {
  const { control, handleSubmit } = useForm();
  const route = useRoute();

  const navigation = useNavigation();

  const onConfirmPressed = async (data) => {
    try {
      await Auth.confirmSignUp(route?.params?.username, data.code);
      await DataStore.save(
        new Patient({
          email: route?.params?.username,
          sub: route?.params?.sub,
          // mobile: phone, //in production should be the main mechanism?
          // full_name: fullName,
          // gender: data.gender, //should be switch buttons
          // picture: data.picture,//........
          // date_of_birth: data.birthDate,//........
          // address: address,
          // username: username,
          //lat: parseFloat(lat),//........
          //lng: parseFloat(lng),//........
        })
      );
      navigation.navigate("SignIn", { newAccount: true }); // should show home with the new user
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(route?.params?.username);
      Alert.alert("Code resent", "Check your messages for the new code");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  return (
    <ThemeView>
      <Spacer size={6}>
        <TitleText>Confirm your email</TitleText>
      </Spacer>
      <CustomInput
        name="code"
        control={control}
        keyboardType="numeric"
        label="Enter your confirmation code"
        rules={{
          required: "Confirmation code is required",
        }}
      />
      <ThemeButton
        onPress={handleSubmit(onConfirmPressed)}
        icon="check-bold"
        textColor="#F1F1F1"
      >
        <ThemeButtonText>Confirm</ThemeButtonText>
      </ThemeButton>
      <ThemeButton
        onPress={onResendPress}
        icon="check-bold"
        buttonColor={theme.colors.accent}
        textColor={theme.colors.primary}
      >
        <ThemeButtonText style={{ color: theme.colors.primary }}>
          Resend code
        </ThemeButtonText>
      </ThemeButton>

      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </ThemeView>
  );
};

export default ConfirmEmailScreen;
