import CustomButton from "../../components/CustomButton";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { Avatar } from "react-native-paper";

import {
  Spacer,
  ThemeButton,
  ThemeButtonText,
  ThemeView,
  TitleText,
} from "../../infrastructure/theme";
import CustomInput from "../../components/CustomInput";
import Logo from "../../../assets/avatar.png";

const ForgotPasswordScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSendPressed = async (data) => {
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate("NewPassword", { username: data.username });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ThemeView>
      <Spacer size={2} />
      <Avatar.Image size={180} source={Logo} />
      <TitleText>Reset your password</TitleText>
      <Spacer size={2} />
      <CustomInput
        name="username"
        control={control}
        label="Email"
        rules={{
          required: "Email is required",
        }}
        // keyboardType="phone-pad"
      />
      <ThemeButton
        onPress={handleSubmit(onSendPressed)}
        icon="send-check"
        textColor="#F1F1F1"
      >
        <ThemeButtonText>Send</ThemeButtonText>
      </ThemeButton>

      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </ThemeView>
  );
};

export default ForgotPasswordScreen;
