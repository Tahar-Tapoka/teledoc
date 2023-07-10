import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../../screens/auth/SignInScreen";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import ConfirmEmailScreen from "../../screens/auth/ConfirmEmailScreen";
import NewPasswordScreen from "../../screens/auth/NewPasswordScreen";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";
import PoliciesScreen from "../../screens/addOnes/PoliciesScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="Policies" component={PoliciesScreen} />
    </Stack.Navigator>
  );
};
