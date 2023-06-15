import React from "react";
import { View } from "react-native";
import Navigation from "./src/infrastructure/navigation";
import { PaperProvider } from "react-native-paper";
import { theme } from "./src/infrastructure/theme";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
};

export default App;
