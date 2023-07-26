import { createStackNavigator } from "@react-navigation/stack";
import DrProfileScreen from "../../screens/features/DrProfileScreen";
import HomeScreen from "../../screens/features/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreens" component={HomeScreen} />
    <Stack.Screen name="DrProfileScreen" component={DrProfileScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
