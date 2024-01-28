import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const AuthUpperText = (props) => {
  const { containerStyle, title, coloredTitle, titleStyle, coloredTitleStyle } =
    props;

  return (
    <View style={[styles.upperView, containerStyle]}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
      <Text style={[styles.text, styles.coloredText, coloredTitleStyle]}>
        {coloredTitle}
      </Text>
    </View>
  );
};

export default AuthUpperText;
