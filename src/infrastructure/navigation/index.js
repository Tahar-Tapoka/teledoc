import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

import SignInScreen from "../../screens/auth/SignInScreen";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import ConfirmEmailScreen from "../../screens/auth/ConfirmEmailScreen";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";
import NewPasswordScreen from "../../screens/auth/NewPasswordScreen";
import AccountCreatedScreen from "../../screens/auth/AccountCreatedScreen";
import PoliciesScreen from "../../screens/addOnes/PoliciesScreen";
import AboutUs from "../../screens/addOnes/AboutUs";
import ContactUs from "../../screens/addOnes/ContactUs";
import LoadingScreen from "../../components/LoadingScreen";
import { useAuthContext } from "../../contexts/AuthContext";
import { ProfileScreen } from "../../screens/auth/ProfileScreen";
import TryItScreen from "../../screens/addOnes/TryItScreen";
import { CameraScreen } from "../../screens/auth/CameraScreen";
import { MyDrawer } from "./Drawer";
import { AppNavigator } from "./AppNavigator";
import { AccountNavigator } from "./AccountNavigator";

// const Stack = createStackNavigator();

// const StackNavigatror = () => {
//   const { dbUser, authUser } = useAuthContext();
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {dbUser ? (
//         <>
//           {dbUser.username ? (
//             <>
//               <Stack.Screen
//                 name="AccountCreated"
//                 component={AccountCreatedScreen}
//                 initialParams={{ user: dbUser?.username }}
//               />
//               <Stack.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 initialParams={{ user: dbUser }}
//               />
//               <Stack.Screen name="CameraScreen" component={CameraScreen} />
//             </>
//           ) : (
//             <>
//               <Stack.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 initialParams={{ user: dbUser }}
//               />
//               <Stack.Screen name="CameraScreen" component={CameraScreen} />
//             </>
//           )}
//         </>
//       ) : (
//         <>
//           <Stack.Screen name="SignIn" component={SignInScreen} />
//           <Stack.Screen name="SignUp" component={SignUpScreen} />
//           <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
//           <Stack.Screen
//             name="ForgotPassword"
//             component={ForgotPasswordScreen}
//           />
//           <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
//         </>
//       )}
//       <Stack.Screen name="ContactUs" component={ContactUs} />
//       <Stack.Screen name="AboutUs" component={AboutUs} />
//       <Stack.Screen name="Policies" component={PoliciesScreen} />
//     </Stack.Navigator>
//   );
// };

const Navigation = () => {
  const { dbUser, authUser } = useAuthContext();
  if (authUser === undefined) return <LoadingScreen />;

  return (
    <NavigationContainer>
      {dbUser ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
