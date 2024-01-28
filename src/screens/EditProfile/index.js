import { View, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";

const EditProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppBar
        title="Edit Profile"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <AppTextInput
          placeholderTextColor="#212121"
          placeholder="Olivia Lucas"
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />

        <AppTextInput
          placeholderTextColor="#212121"
          placeholder="Olivia"
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />

        <AppTextInput
          calender
          placeholderTextColor="#212121"
          placeholder="12/27/1995"
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />

        <AppTextInput
          emailAddress
          placeholderTextColor="#212121"
          placeholder="andrew_ainsley@yourdomain.com"
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />

        <AppTextInput
          arrowDown
          placeholderTextColor="#212121"
          placeholder="United States"
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />

        <AppTextInput
          filledArrow
          placeholderTextColor="#212121"
          placeholder="+1 111 467 378 399"
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />

        <AppTextInput
          arrowDown
          placeholderTextColor="#212121"
          placeholder="Male"
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />
      </ScrollView>

      <AppButton title="Update" />
    </View>
  );
};

export default EditProfileScreen;
