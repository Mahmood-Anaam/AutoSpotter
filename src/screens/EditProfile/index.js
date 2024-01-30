import { View, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import { getAuth } from "firebase/auth";


const EditProfileScreen = ({ navigation }) => {
  const user = getAuth().currentUser;

  const email = user.email == null ? "" : user.email;
  const name = user.displayName == null ? "" : user.displayName;
  const phoneNumber = user.phoneNumber == null ? "" : user.phoneNumber;



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
          value={name}
          placeholder={"Full Name"}
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
          value={email}
          placeholder={"exp@gmail.com"}
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
          value={phoneNumber}
          placeholder="Phone number"
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
