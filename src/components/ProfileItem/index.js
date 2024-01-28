import React, { useState } from "react";
import { Text, Switch, Pressable } from "react-native";
import styles from "./styles";
import {
  ProfileSVG,
  PaymentSVG,
  NotificationSVG,
  SecuritySVG,
  HelpSVG,
  EyeSvg,
  LogoutSVG,
  FilledArrowRightSVG,
} from "../SVG/SVG";
import { COLORS } from "../../utilities/colors";

const ProfileItem = (props) => {
  const {
    itemContainerStyle,
    onPress,
    title,
    profile,
    payment,
    notification,
    security,
    help,
    darkMode,
    switchMode,
    arrowRight,
    logout,
    leftIcon,
    rightIcon,
    trackfalseColor,
    tracktrueColor,
    enabledThumbColor,
    disabledThumbColor,
    value,
    onValueChange,
  } = props;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.itemContainer, itemContainerStyle]}
    >
      {profile && leftIcon && <ProfileSVG />}

      {payment && leftIcon && <PaymentSVG />}

      {notification && leftIcon && <NotificationSVG />}

      {security && leftIcon && <SecuritySVG />}

      {help && leftIcon && <HelpSVG />}

      {darkMode && leftIcon && <EyeSvg />}

      {logout && leftIcon && <LogoutSVG />}

      <Text style={[styles.itemTitle, logout && styles.logout]}>{title}</Text>

      {arrowRight && rightIcon && <FilledArrowRightSVG />}

      {switchMode && rightIcon && (
        <Switch
          trackColor={{
            false: trackfalseColor || COLORS.GREY,
            true: tracktrueColor || COLORS.PRIMARY,
          }}
          thumbColor={
            isEnabled
              ? enabledThumbColor || COLORS.WHITE
              : disabledThumbColor || COLORS.WHITE
          }
          onValueChange={onValueChange || toggleSwitch}
          value={value || isEnabled}
        />
      )}
    </Pressable>
  );
};

export default ProfileItem;
