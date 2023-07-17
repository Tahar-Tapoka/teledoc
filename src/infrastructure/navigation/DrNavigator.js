import DrNearMeScreen from "../../screens/features/DrNearMeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import DrProfileScreen from "../../screens/features/DrProfileScreen";

const Stack = createStackNavigator();

const DrNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DrNearMeScreen" component={DrNearMeScreen} />
    <Stack.Screen name="DrProfileScreen" component={DrProfileScreen} />
  </Stack.Navigator>
);

export default DrNavigator;
