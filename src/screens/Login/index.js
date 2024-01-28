import React, { useState, useRef } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import AppButton from "../../components/AppButton/index";
import AppTextInput from "../../components/AppTextInput";
import AuthUpperText from "../../components/AuthUpperText";
import { SCREENS } from "../../utilities/constants";
import Toast from "react-native-simple-toast";
import { getApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";


const LoginScreen = ({ navigation }) => {

  const [phoneNumber, setPhoneNumber] = useState("+967 737 265 380");
  // "+967 737 265 380"
  // "+967737265380"

  // "+967 737 771 853"
  // "+967737771853"

  // "+967 781 858 711"
  // "+967781858711"

  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaVerifier = useRef(null);


  const loginWithPhoneNumber = async (phoneNumber) => {
    const auth = getAuth();
    const result = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier.current
    );
    setConfirmationResult(result);
  };



  return (
    <View style={styles.container}>
      <AuthUpperText title="Login to your" coloredTitle="Account" />

      <AppTextInput
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => { setPhoneNumber(text) }}

      />

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={getApp().options}
      />

      <AppButton
        title="Sign In"
        onPress={async () => {
          await loginWithPhoneNumber(phoneNumber);
          if (confirmationResult != null) {
            const fullName=null;
            navigation.navigate(SCREENS.OTP_CODE_SCREEN,
              {
                confirmationResult,
                fullName,
                phoneNumber,
              }
            );
          }
          else {
            Toast.show("Verification Failed.Please try again.", Toast.CENTER);
          }
        }}
      />


      <AppButton
        containerStyle={styles.guestContainer}
        title="Continue as guest"
        onPress={() => {
          navigation.replace(SCREENS.BOTTOM_NAVIGATOR);
        }}
      />


      <View style={styles.dontHaveAccountContainer}>

        <Text style={styles.dontHaveAccountText} >{"\n"}{"\n"} Don't have an account?</Text>

        <Pressable
          onPress={() => {
            navigation.replace(SCREENS.SIGNUP_SCREEN);
          }}
        >
          <Text style={styles.blueText}>{"\n"}{"\n"}Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
