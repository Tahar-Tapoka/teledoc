import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Auth } from "@aws-amplify/auth";

import HistoryScreen from "../../screens/features/HistoryScreen";
import AboutUs from "../../screens/addOnes/AboutUs";
import ContactUs from "../../screens/addOnes/ContactUs";
import NotificationScreen from "../../screens/features/NotificationScreen";
import { SettingsNavigator } from "./SettingsNavigator";
import DrNearMeScreen from "../../screens/features/DrNearMeScreen";
import HomeScreen from "../../screens/features/HomeScreen";
import { colors } from "../theme/colors";
import { Divider } from "react-native-paper";
import { View } from "react-native";
import { ThemeView, theme } from "../theme";
import { useWindowDimensions } from "react-native";
import { LocationContextProvider } from "../../contexts/LocationContext";
import DrProfileScreen from "../../screens/features/DrProfileScreen";
import DrNavigator from "./DrNavigator";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TAB_ICON = {
  Home: "home",
  HomeScreen: "home",
  Notifications: "notifications",
  DrNearMe: "md-map",
  Settings: "md-settings",
  "Leave a Feedback": "md-star",
  "About Us": "people",
  History: "albums",
  Help: "help-circle",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    drawerIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    // tabBarBackground: () => (
    //   <ThemeView style={{ flex: 1, position: "absolute" }} />
    // ),
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.backdrop,
    drawerActiveTintColor: colors.primary,
    drawerInactiveTintColor: colors.backdrop,
    tabBarShowLabel: false,
    headerShown: false,
    // tabBarStyle: { backgroundColor: colors.accent },
    // drawerStyle: { backgroundColor: colors.accent },
  };
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label="Leave a Feedback"
        icon={({ focused, color, size }) => (
          <Ionicons name="thumbs-up" size={size} color={color} />
        )}
        onPress={() =>
          Linking.openURL(
            "https://play.google.com/store/apps/details?id=com.google.android.apps.tasks"
          )
        }
      />
      <View
        style={{
          marginTop: "auto", //100,
          borderBottomColor: "lightgray",
          borderBottomWidth: 1,
        }}
      />
      <DrawerItem
        label="Sign Out"
        icon={({ focused, color, size }) => (
          <Ionicons name="log-out" size={size} color={color} />
        )}
        onPress={() => Auth.signOut()}
        inactiveTintColor={colors.error}
        inactiveBackgroundColor={"#FFD0D0"}
      />
    </DrawerContentScrollView>
  );
};

const BottomTabNavigator = () => (
  <LocationContextProvider>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="HomeScreen" component={HomeNavigator} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="DrNearMe" component={DrNavigator} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  </LocationContextProvider>
);

export const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={createScreenOptions}
      //   screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="History" component={HistoryScreen} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Help" component={ContactUs} />
    </Drawer.Navigator>
  );
};
