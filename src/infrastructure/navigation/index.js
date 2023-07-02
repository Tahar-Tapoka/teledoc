import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../../screens/auth/SignInScreen";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import ConfirmEmailScreen from "../../screens/auth/ConfirmEmailScreen";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";
import NewPasswordScreen from "../../screens/auth/NewPasswordScreen";
import AccountCreatedScreen from "../../screens/auth/AccountCreatedScreen";
import PoliciesScreen from "../../screens/addOnes/PoliciesScreen";
import AboutUs from "../../screens/addOnes/AboutUs";
import ContactUs from "../../screens/addOnes/ContactUs";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Policies" component={PoliciesScreen} />

        <Stack.Screen name="Home" component={AccountCreatedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
