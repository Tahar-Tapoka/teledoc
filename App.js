import "react-native-gesture-handler";
import { View } from "react-native";
import Navigation from "./src/infrastructure/navigation";
import { PaperProvider } from "react-native-paper";
import { theme } from "./src/infrastructure/theme";
import { StatusBar } from "expo-status-bar";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import DrProfileScreen from "./src/screens/features/DrProfileScreen";

import drs from "./assets/drs.json";
import LoadingScreen from "./src/components/LoadingScreen";
import { DrItem } from "./src/components/DrItem";
import HomeScreen from "./src/screens/features/HomeScreen";

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
        <HomeScreen />
        {/* <DrProfileScreen dr={drs[1]} /> */}
        {/* <DrItem dr={drs[0]} /> */}
        {/* <LoadingScreen /> */}
        {/* <AuthContextProvider>
          <Navigation />
        </AuthContextProvider> */}
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
};

export default App;
