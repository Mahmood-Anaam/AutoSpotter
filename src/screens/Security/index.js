import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import ProfileItem from "../../components/ProfileItem";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../utilities/colors";

const SecurityScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppBar
        title="Security"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <ProfileItem
        title="Face ID"
        switchMode
        rightIcon
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="Remember me"
        switchMode
        rightIcon
        value
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="Touch ID"
        switchMode
        rightIcon
        value
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="Google Authenticator"
        rightIcon
        arrowRight
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <AppButton
        title="Change Password"
        GradientColors={COLORS.GRADIENT2}
        titleStyle={styles.titleStyle}
      />
    </ScrollView>
  );
};

export default SecurityScreen;
