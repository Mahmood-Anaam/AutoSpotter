import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../../utilities/constants";
import ProfileScreen from "../../screens/Profile";
import EditProfileScreen from "../../screens/EditProfile";
import NotificationsScreen from "../../screens/Notifications";
import SecurityScreen from "../../screens/Security";

const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
      <Stack.Screen
        name={SCREENS.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          header: () => {},
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS.PROFILE_EDIT_SCREEN}
        component={EditProfileScreen}
        options={{
          header: () => {},
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS.NOTIFICATIONS_SCREEN}
        component={NotificationsScreen}
        options={{
          header: () => {},
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS.SECURITY_SCREEN}
        component={SecurityScreen}
        options={{
          header: () => {},
          headerStyle: {
            height: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
