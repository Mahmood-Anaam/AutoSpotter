import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { ASSETS } from "../../utilities/assets";
import LottieView from "lottie-react-native";
import { SCREENS } from "../../utilities/constants";


const OnboardingScreen = ({ navigation }) => {
  const navigateTOCarousel = () => {
    navigation.replace(SCREENS.CAROUSEL_SCREEN);
  };
  useEffect(() => {
    setTimeout(navigateTOCarousel, 2000);
  }, []);

  
  return (
    <View style={styles.container}>
      <Image
        source={ASSETS.OnboardingLogo}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>Welcome to 👋</Text>

      <Text style={styles.title}>AUTO SPOTTER</Text>

      <Text style={styles.description}>
        The best parking app of the century for all people around the world
      </Text>

      <LottieView
        source={ASSETS.onboardingLoading}
        style={styles.lottieStyle}
        autoPlay
        loop
      />
    </View>
  );
};

export default OnboardingScreen;
