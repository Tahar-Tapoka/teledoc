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

const Stack = createStackNavigator();

const Navigation = () => {
  const { dbUser, authUser } = useAuthContext();

  // const [user, setUser] = useState(undefined);
  // checkAuth = async () => {
  //   try {
  //     const authUser = await Auth.currentAuthenticatedUser({
  //       bypassCache: true,
  //     });
  //     setUser(authUser);
  //   } catch (e) {
  //     setUser(null);
  //   }
  // };
  // useEffect(() => {
  //   checkAuth();
  // }, []);
  // useEffect(() => {
  //   const listner = (data) => {
  //     if (data.payload.event === "signIn" || data.payload.event === "signOut") {
  //       checkAuth();
  //     }
  //   };
  //   Hub.listen("auth", listner);
  //   return () => Hub.remove("auth", listner);
  // }, []);
  if (authUser === undefined) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authUser ? (
          <Stack.Screen
            name="Home"
            component={AccountCreatedScreen}
            initialParams={{ user: authUser.attributes.name }}
          />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          </>
        )}
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Policies" component={PoliciesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
