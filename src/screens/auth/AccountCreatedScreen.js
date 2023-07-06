import { StyleSheet, Text } from "react-native";
import {
  Container,
  ThemeButton,
  ThemeButtonText,
  TitleText,
  theme,
} from "../../infrastructure/theme";
import { Avatar } from "react-native-paper";
import { Auth } from "@aws-amplify/auth";
import { useNavigation } from "@react-navigation/native";
const AccountCreatedScreen = ({ route, navigation }) => {
  const user = route.params.user;
  return (
    <Container>
      <Avatar.Image
        size={300}
        source={require("../../../assets/thumb.png")}
        style={{ backgroundColor: theme.colors.background }}
      />

      <TitleText>Account Created! {user}</TitleText>

      <Text style={{ color: theme.colors.backdrop }}>
        Your account had been created succefully
      </Text>
      <ThemeButton
        textColor="#F1F1F1"
        onPress={() => {
          console.log("yaaaaaay");
          navigation.navigate("Profile");
        }}
      >
        <ThemeButtonText>Get Started</ThemeButtonText>
      </ThemeButton>
      <ThemeButton
        onPress={() => Auth.signOut()}
        icon="logout"
        buttonColor="#e3e3e3"
        textColor="#363636"
      >
        Logout
      </ThemeButton>
    </Container>
  );
};

export default AccountCreatedScreen;

const styles = StyleSheet.create({});
