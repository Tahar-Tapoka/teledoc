import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Auth } from "@aws-amplify/auth";

import ProfileScreen from "../../screens/auth/ProfileScreen";
import HistoryScreen from "../../screens/features/HistoryScreen";
import AboutUs from "../../screens/addOnes/AboutUs";
import ContactUs from "../../screens/addOnes/ContactUs";
import NotificationScreen from "../../screens/features/NotificationScreen";
import { SettingsNavigator } from "./SettingsNavigator";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem label="Rate Us" onPress={() => alert("Link to Rate Us")} />
      <DrawerItem label="Rate Us" onPress={() => Auth.signOut()} />
    </DrawerContentScrollView>
  );
};

export const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen name="Profile" component={SettingsNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="History" component={HistoryScreen} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Help" component={ContactUs} />
    </Drawer.Navigator>
  );
};
