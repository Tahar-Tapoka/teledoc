import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { CameraScreen } from "../../screens/auth/CameraScreen";
import ProfileScreen from "../../screens/auth/ProfileScreen";

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        options={{ header: () => null }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
};
