import React, { useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import AuthUpperText from "../../components/AuthUpperText";
import { SCREENS } from "../../utilities/constants";
import { getApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import Toast from "react-native-simple-toast";

const SignUpScreen = ({ navigation }) => {


  const [fullName, setfullName] = useState("Mahmood Anaam");
  const [phoneNumber, setphoneNumber] = useState("+967 737 265 380");



  const recaptchaVerifier = useRef(null);


  const loginWithPhoneNumber = async (phoneNumber) => {
    const auth = getAuth();
    const result = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier.current
    );
    return result;
  };




  return (
    <View style={styles.container}>
      <AuthUpperText title="Create Your" coloredTitle="Account" />

      <AppTextInput placeholder="Full Name"
        value={fullName}
        fullName
        onChangeText={(text) => { setfullName(text) }}
      />

      <AppTextInput placeholder="Phone Number"
        value={phoneNumber}
        keyboardType={'phone-pad'}
        onChangeText={(text) => { setphoneNumber(text) }}

      />

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={getApp().options}
      />

      <AppButton
        title="Sign Up"
        onPress={async () => {
          const confirmationResult = await loginWithPhoneNumber(phoneNumber);
          if (confirmationResult != null) {
            navigation.navigate(SCREENS.OTP_CODE_SCREEN,
              {
                confirmationResult: confirmationResult,
                fullName: fullName,
                phoneNumber: phoneNumber,
              }
            );
          }
          else {

            Toast.show("Verification Failed.Please try again.", Toast.CENTER);
          }
        }}
      />

      <View style={styles.dontHaveAccountContainer}>
        <Text style={styles.dontHaveAccountText}>Already have an account?</Text>

        <Pressable
          onPress={() => {
            navigation.replace(SCREENS.LOGIN_SCREEN);
          }}
        >
          <Text style={styles.blueText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen;
