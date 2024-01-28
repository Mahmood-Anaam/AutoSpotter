import { View, Text, Image } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./styles";
import { FIRST_LAUNCH, SCREENS, SLIDES } from "../../utilities/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";


const CarouselScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const { image, title1, title2, title3, description } = item;

    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} resizeMode="contain" />

        <Text style={styles.title}>
          {title1}
          <Text style={[styles.title, styles.title2]}>{title2}</Text>
          {title3}
        </Text>

        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };

  const renderButtonLabel = (label) => {
    return (
      <View style={styles.buttonLabelContainer}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>
    );
  };

  const navigateToLogin = async () => {
    await AsyncStorage.setItem(FIRST_LAUNCH, "false");
    navigation.replace(SCREENS.AUTH_STACK);
  };

  return (
    <AppIntroSlider
      data={SLIDES}
      showSkipButton
      activeDotStyle={styles.activeDotStyle}
      renderNextButton={() => renderButtonLabel("NEXT")}
      renderSkipButton={() => renderButtonLabel("SKIP")}
      renderDoneButton={() => renderButtonLabel("DONE")}
      onDone={() => navigateToLogin()}
      renderItem={renderItem}
    />
  );
};

export default CarouselScreen;
