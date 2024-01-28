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

const SignUpScreen = ({ navigation }) => {
  const [fullName, setfullName] = useState("Mahmood Anaam");
  const [phoneNumber, setphoneNumber] = useState("+967 781 858 711");


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
      <AuthUpperText title="Create Your" coloredTitle="Account" />

      <AppTextInput placeholder="Full Name" 
      value={fullName} fullName 
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
          await loginWithPhoneNumber(phoneNumber);
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
            alert("Verification Failed.Please try again.");
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
