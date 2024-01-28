import React from "react";
import { Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { COLORS } from "../../utilities/colors";
import { SquaredAddSVG } from "../SVG/SVG";

const AppButton = (props) => {
  const {
    title,
    onPress,
    containerStyle,
    GradientColors,
    linearGradientStyle,
    titleStyle,
    disabled,
    addSvg,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <LinearGradient
        colors={GradientColors || COLORS.GRADIENT}
        style={[styles.linearGradient, linearGradientStyle]}
      >
        <Pressable onPress={onPress} style={styles.button} disabled={disabled}>
          {addSvg && <SquaredAddSVG />}
          <Text style={[styles.text, titleStyle]}>{title}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default AppButton;
