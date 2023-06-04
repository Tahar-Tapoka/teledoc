import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { PaperProvider } from "react-native-paper";
import { theme } from "./infrastructure/theme";
import RegistrationScreen from "./screens/RegistrationScreen";
import AccountCreatedScreen from "./screens/AccountCreatedScreen";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        {/* <LoginScreen /> */}
        {/* <RegistrationScreen /> */}
        <AccountCreatedScreen />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
