import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../../utilities/constants";
import HomeScreen from "../../screens/Home";
import ChooseGateScreen from "../../screens/ChooseGate";
import ChooseFloorScreen from "../../screens/ChooseFloor";
import PickParkingSpotScreen from "../../screens/PickParkingSpot";
import ParkingBookingDetailsScreen from "../../screens/ParkingBookingDetails";
import ParkingBookingSummaryScreen from "../../screens/ParkingBookingSummary";
import ChangePaymentCardScreen from "../../screens/ChangePaymentCard";
import ParkingTicketScreen from "../../screens/ParkingTicket";
import AddNewPaymentCardScreen from "../../screens/AddNewPaymentCard";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
      <Stack.Screen
        name={SCREENS.HOME_SCREEN}
        component={HomeScreen}
        options={{
          header: () => { },
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS.CHOOSE_GATE_SCREEN}
        component={ChooseGateScreen}
        options={{
          header: () => { },
          headerStyle: {
            height: 0,
          },
        }}
      />

     

      <Stack.Screen
        name={SCREENS.PICK_PARKING_SPOT_SCREEN}
        component={PickParkingSpotScreen}
        options={{
          header: () => { },
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS.PARKING_BOOKING_DETAIL_SCREEN}
        component={ParkingBookingDetailsScreen}
        options={{
          header: () => { },
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS.PARKING_BOOKING_SUMMARY_SCREEN}
        component={ParkingBookingSummaryScreen}
        options={{
          header: () => { },
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS.CHANGE_PAYMENT_METHOD_SCREEN}
        component={ChangePaymentCardScreen}
        options={{
          header: () => { },
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS.PARKING_TICKET_SCREEN}
        component={ParkingTicketScreen}
        options={{
          header: () => { },
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name={SCREENS.ADD_NEW_Card_SCREEN}
        component={AddNewPaymentCardScreen}
        options={{
          header: () => { },
          headerStyle: {
            height: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
