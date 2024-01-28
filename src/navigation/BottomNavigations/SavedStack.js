import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../../utilities/constants";
import SavedScreen from "../../screens/Saved";

const Stack = createStackNavigator();
const SavedStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
      <Stack.Screen
        name={SCREENS.SAVED_SCREEN}
        component={SavedScreen}
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

export default SavedStack;
