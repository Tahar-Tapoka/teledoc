import { View } from "react-native";
import Navigation from "./src/infrastructure/navigation";
import { PaperProvider } from "react-native-paper";
import { theme } from "./src/infrastructure/theme";
import { StatusBar } from "expo-status-bar";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { AuthContextProvider } from "./src/contexts/AuthContext";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
};

export default App;
