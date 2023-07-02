import { ActivityIndicator } from "react-native-paper";
import { ThemeView } from "../infrastructure/theme";
import { colors } from "../infrastructure/theme/colors";

const LoadingScreen = () => {
  return (
    <ThemeView style={{ justifyContent: "center" }}>
      <ActivityIndicator animating={true} color={colors.primary} size="large" />
    </ThemeView>
  );
};

export default LoadingScreen;
