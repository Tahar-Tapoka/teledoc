import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import {
  RowContainer,
  Spacer,
  SubtitleText,
  ThemeScroll,
  ThemeView,
  TitleText,
  theme,
} from "../../infrastructure/theme";
import Logo from "../../../assets/avatar.png";

const ContactUs = () => {
  const email = "teleDoc@teleDoc.com";
  const mobile = "+213666666666";
  const address = "21 rue du Flan, Alger, simooooh apres jaaac maloda dteib";
  return (
    <ThemeScroll>
      <ThemeView>
        <Avatar.Image size={180} source={Logo} />

        <TitleText style={{ alignSelf: "center" }}>Contact Us</TitleText>
      </ThemeView>
      <Spacer size={2} />
      <RowContainer>
        <Text style={styles.txt}>Email : </Text>
        <SubtitleText>{email}</SubtitleText>
      </RowContainer>
      <RowContainer>
        <Text style={styles.txt}>Mobile : </Text>
        <SubtitleText>{mobile}</SubtitleText>
      </RowContainer>
      <RowContainer style={{ alignItems: "center", flexWrap: "wrap" }}>
        <Text style={styles.txt}>Address : </Text>
        <SubtitleText>{address}</SubtitleText>
      </RowContainer>
    </ThemeScroll>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.h4,
    // flexWrap: "wrap",
    // fontWeight: theme.fontWeights.bold,
  },
});
