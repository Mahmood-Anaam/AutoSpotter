/* eslint-disable react/no-unstable-nested-components */
import "react-native-gesture-handler";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../utilities/colors";
import { SCREENS } from "../utilities/constants";
import HomeStack from "./BottomNavigations/HomeStack";
import BookingStack from "./BottomNavigations/BookingStack";
import ProfileStack from "./BottomNavigations/ProfileStack";
import SavedStack from "./BottomNavigations/SavedStack";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FONTS } from "../utilities/fonts";
import { SPACING } from "../utilities/spacing";
import { normalizeFontSize } from "../utilities/responsive";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME_STACK}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GREY,
        tabBarLabelStyle: styles.text,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View>
                {focused ? (
                  <Entypo name="home" size={24} color={color} />
                ) : (
                  <SimpleLineIcons name="home" size={24} color={color} />
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={SCREENS.SAVED_STACK}
        component={SavedStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View>
                <MaterialCommunityIcons
                  name={focused ? "bookmark-minus" : "bookmark-minus-outline"}
                  size={24}
                  color={color}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={SCREENS.BOOKING_STACK}
        component={BookingStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View>
                <Entypo
                  name={focused ? "text-document-inverted" : "text-document"}
                  size={24}
                  color={color}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={SCREENS.PROFILE_STACK}
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <View>
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={color}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopRightRadius: SPACING.s26,
    borderTopLeftRadius: SPACING.s26,
    height: Platform.OS === "ios" ? "11.3%" : "9%",
    backgroundColor: COLORS.WHITE,
    paddingTop: 10,
  },
  text: {
    fontSize: normalizeFontSize(14),
    fontFamily: FONTS.MEDIUM,
    paddingBottom: Platform.OS === "ios" ? "5%" : "6%",
  },
});
