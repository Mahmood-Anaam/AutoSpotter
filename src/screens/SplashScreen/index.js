import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import LottieView from "lottie-react-native";
import { ASSETS } from "../../utilities/assets";
import { FIRST_LAUNCH, SCREENS } from "../../utilities/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";

const SplashScreen = ({ navigation }) => {

  const checkfirstLaunch = async () => {

    const firstLaunch = await AsyncStorage.getItem(FIRST_LAUNCH);

    if (firstLaunch === null) {
      navigation.replace(SCREENS.ONBOARDING_SCREEN);
    }

    else {

      if (getAuth().currentUser) {
        navigation.replace(SCREENS.BOTTOM_NAVIGATOR);
      }
      else {
        navigation.replace(SCREENS.AUTH_STACK);
      }

    }

  }


  useEffect(() => {
    setTimeout(checkfirstLaunch, 2000);
  }, []);


  return (
    <View style={styles.container}>
      <Image source={ASSETS.SplashLogo} style={styles.image} />

      <Text style={styles.text}>AUTO SPOTTER</Text>

      <LottieView
        source={ASSETS.loading}
        style={styles.lottieStyle}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;
