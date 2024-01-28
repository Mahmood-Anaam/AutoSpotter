import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../utilities/constants";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import OtpCodeScreen from "../screens/OtpCodeScreen";
import { FONTS } from "../utilities/fonts";

const Stack = createStackNavigator();

export default Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.LOGIN_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />

      <Stack.Screen name={SCREENS.SIGNUP_SCREEN} component={SignUpScreen} />

      <Stack.Screen
        name={SCREENS.OTP_CODE_SCREEN}
        component={OtpCodeScreen}
        options={{
          headerShown: true,
          title: "Verify your phone number",
          headerTitleStyle: {
            fontFamily: FONTS.SEMI_BOLD,
            fontSize: 18,
          },
        }}
      />
    </Stack.Navigator>
  );
};
