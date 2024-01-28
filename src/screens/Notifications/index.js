import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import ProfileItem from "../../components/ProfileItem";
import AppBar from "../../components/AppBar";

const NotificationsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppBar
        title="Notification"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <ProfileItem
        title="General Notification"
        switchMode
        rightIcon
        value={true}
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="Sound"
        rightIcon
        switchMode
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="Vibrate"
        rightIcon
        switchMode
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="App Updates"
        rightIcon
        switchMode
        value={true}
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="New Service Available"
        rightIcon
        switchMode
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="New tips available"
        rightIcon
        switchMode
        onPress={() => {
          console.log("Pressed");
        }}
      />
    </ScrollView>
  );
};

export default NotificationsScreen;
