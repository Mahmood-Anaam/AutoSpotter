import { View, TextInput, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { COLORS } from "../../utilities/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import {
  ArrowDownSVG,
  CalenderSVG,
  EmailSVG,
  FilledArrowDownSVG,
  FlagSVG,
} from "../SVG/SVG";

const AppTextInput = (props) => {
  const {
    containerStyle,
    placeholder,
    placeholderTextColor,
    inputStyle,
    email,
    password,
    phone,
    fullName,
    leftIcon,
    RenderLeftIcon,
    rightIcon,
    RenderRightIcon,
    onIconPress,
    autoCapitalize,
    keyboardType,
    calender,
    emailAddress,
    arrowDown,
    filledArrow,
    ...rest
  } = props;

  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {email && <MaterialCommunityIcons name="email" size={20} />}

      {fullName && <Fontisto name="person" size={20} />}

      {password && <Fontisto name="locked" size={20} />}

      {phone && <MaterialCommunityIcons name="phone" size={20} />}

      {filledArrow && (
        <View style={styles.filledArrow}>
          <FlagSVG />
          <FilledArrowDownSVG size={20} />
        </View>
      )}

      {leftIcon && RenderLeftIcon()}

      <TextInput
        {...rest}
        placeholder={placeholder || ""}
        secureTextEntry={password && !visible}
        autoCapitalize={autoCapitalize || "none"}
        placeholderTextColor={placeholderTextColor || COLORS.LIGHTER_GREY}
        style={[styles.input, inputStyle]}
        keyboardType={keyboardType || phone ? "phone-pad" : "default"}
      />

      {password && (
        <Pressable onPress={toggleVisible}>
          <Entypo name={visible ? "eye" : "eye-with-line"} size={20} />
        </Pressable>
      )}

      {calender && <CalenderSVG />}

      {emailAddress && <EmailSVG />}

      {arrowDown && <ArrowDownSVG />}

      {rightIcon && RenderRightIcon()}
    </View>
  );
};

export default AppTextInput;
