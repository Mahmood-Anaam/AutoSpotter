import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import BottomNavigator from "./BottomNavigator";
import AuthStack from "./AuthStack";
import { SCREENS } from "../utilities/constants";
import OnboardingScreen from "../screens/OnboardingScreen";
import CarouselScreen from "../screens/Carousel";



const Stack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.SPLASH_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREENS.SPLASH_SCREEN} component={SplashScreen} />

      <Stack.Screen
        name={SCREENS.ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />

      <Stack.Screen name={SCREENS.CAROUSEL_SCREEN} component={CarouselScreen} />

      <Stack.Screen name={SCREENS.AUTH_STACK} component={AuthStack} />

      <Stack.Screen
        name={SCREENS.BOTTOM_NAVIGATOR}
        component={BottomNavigator}
      />
    </Stack.Navigator>
  );
};
