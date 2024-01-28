import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../../utilities/constants";
import BookingScreen from "../../screens/Booking";

const Stack = createStackNavigator();
const BookingStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
      <Stack.Screen
        name={SCREENS.BOOKING_SCREEN}
        component={BookingScreen}
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

export default BookingStack;
