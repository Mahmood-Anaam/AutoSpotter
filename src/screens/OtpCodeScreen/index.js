import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { ASSETS } from "../../utilities/assets";
import { OtpInput } from "react-native-otp-entry";
import { COLORS } from "../../utilities/colors";
import Timer from "../../components/Timer";
import AppButton from "../../components/AppButton";
import { SCREENS } from "../../utilities/constants";
import Toast from "react-native-simple-toast";
import { updateProfile } from "firebase/auth";
import { db } from "../../repositorys/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { COLLECTIONS_REFS } from "../../utilities/constants";

const OtpCodeScreen = ({ route, navigation }) => {

  const { confirmationResult, fullName } = route.params;
  [code, setCode] = useState('');




  const verifyCode = async (code) => {

    try {
      const userCredential = await confirmationResult.confirm(code);


      if (userCredential != null) {
        
          await updateProfile(userCredential.user, {
            displayName: fullName==null?" ":fullName
          });
        

        await setDoc(doc(db, COLLECTIONS_REFS.USERS, userCredential.user.uid), {
          "fullName": fullName,
          "phoneNumber":userCredential.user.phoneNumber
        });

        navigation.replace(SCREENS.BOTTOM_NAVIGATOR);
      }

    } catch (error) {
      Toast.show(error, Toast.CENTER);

    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={ASSETS.OtpCodeImg}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>Code has been sent to +1 111 ******99</Text>

      <View style={styles.otpWrapper}>
        <OtpInput
          autoFocus
          numberOfDigits={6}
          focusColor={COLORS.PRIMARY}
          onTextChange={(text) => {
            setCode(text);
          }
          }

          theme={{
            pinCodeTextStyle: styles.pinCodeText,
          }}
        />
      </View>

      <Text style={styles.text}>
        Resend Code in{" "}
        <Timer
          descending={true}
          maxSeconds={60}
          onDeadlineHandler={async () => {
            navigation.pop();
            Toast.show("Confirm Failed.Please try again.", Toast.LONG);


          }}
        />
      </Text>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Verify"
          onPress={async () => {
            if (code.length === 6) {
              await verifyCode(code);
            } else {
              Toast.show("Please fill out all verification code fields.", Toast.CENTER);
            }
          }}
        />
      </View>
    </View>
  );
};

export default OtpCodeScreen;
