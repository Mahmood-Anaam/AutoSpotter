import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { ScannerSVG } from "../SVG/SVG";

const AppBar = (props) => {
  const {
    containerStyle,
    title,
    titleStyle,
    titleContainerStyle,
    rightIconContainerStyle,
    leftIconContainerStyle,
    rightIcon,
    leftIcon,
    scanIcon,
    onLeftIconPress,
    onRightIconPress,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && (
        <Pressable
          onPress={onLeftIconPress}
          style={[styles.leftIconContainer, leftIconContainerStyle]}
        >
          <AntDesign name="arrowleft" size={30} />
        </Pressable>
      )}

      <View style={[styles.titleContainer, titleContainerStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>

      {rightIcon && scanIcon && <ScannerSVG />}

      {rightIcon && !scanIcon && (
        <Pressable
          onPress={onRightIconPress}
          style={[styles.rightIconContainer, rightIconContainerStyle]}
        >
          <Entypo name="dots-three-horizontal" size={20} />
        </Pressable>
      )}
    </View>
  );
};

export default AppBar;
