import { createStackNavigator } from "@react-navigation/stack";
import DrProfileScreen from "../../screens/features/DrProfileScreen";
import HomeScreen from "../../screens/features/HomeScreen";
import SearchScreen from "../../screens/features/SearchScreen";
import AppointementScreen from "../../screens/features/AppointementScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreens" component={HomeScreen} />
    <Stack.Screen name="DrProfileScreen" component={DrProfileScreen} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
    <Stack.Screen name="AppointementScreen" component={AppointementScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
