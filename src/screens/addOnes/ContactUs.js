import { StyleSheet, Text, View } from "react-native";
import {
  RowContainer,
  Spacer,
  ThemeView,
  TitleText,
  theme,
} from "../../infrastructure/theme";

const ContactUs = () => {
  const email = "teleDoc@teleDoc.com";
  const mobile = "+213666666666";
  const address = "21 rue du Flan, Alger";
  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <Spacer size={5} />
      <TitleText style={{ alignSelf: "center" }}>Contact Us</TitleText>
      <RowContainer>
        <TitleText>Email : </TitleText>
        <Text style={styles.txt}>{email}</Text>
      </RowContainer>
      <RowContainer>
        <TitleText>Mobile : </TitleText>
        <Text style={styles.txt}>{mobile}</Text>
      </RowContainer>
      <RowContainer style={{ alignItems: "center" }}>
        <TitleText>Address : </TitleText>
        <Text style={styles.txt}>{address}</Text>
      </RowContainer>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.h4,
    // fontWeight: theme.fontWeights.bold,
  },
});
