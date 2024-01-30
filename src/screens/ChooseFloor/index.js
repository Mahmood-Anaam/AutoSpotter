import { React, useState } from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import AppBar from "../../components/AppBar";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { COLORS } from "../../utilities/colors";
import AppButton from "../../components/AppButton";
import { SCREENS } from "../../utilities/constants";
import { useStore } from "../../store/store";
import { ASSETS } from "../../utilities/assets";




const ChooseFloorScreen = (props) => {

  const { floors } = props.route.params;
  const navigation = useNavigation();

  if (floors.length == 0) {
    return (
      <View style={styles.container}>
        <AppBar
          title="Choose Floor"
          leftIcon
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          containerStyle={styles.containerStyle}
        />
          <Text style={styles.emptyListText}>No floors have been added to this gate yet.</Text>
      </View>
    );
  }



  const [isChecked, setIsChecked] = useState(floors[0].id);
  const setBookingInfo = useStore((state) => state.setBookingInfo);
  


  const handleOnPress = () => {
    const floorId = isChecked;
    setBookingInfo({floorId});
    // navigation.navigate(SCREENS.PICK_PARKING_SPOT_SCREEN, { floors });
    navigation.navigate(SCREENS.PARKING_BOOKING_DETAIL_SCREEN);
  };

  return (
    <View style={styles.container}>
      <AppBar
        title="Choose Floor"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <FlatList
        data={floors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => setIsChecked(item.id)}
              style={[
                styles.gateContainer,
                isChecked === item.id && styles.gateContainerChecked,
              ]}
            >
              <Image source={ASSETS.FloorImg} style={styles.image} />
              <Text style={styles.title}>{item.name}</Text>
              <RadioButton
                value={item.id}
                status={isChecked === item.id ? "checked" : "unchecked"}
                onPress={() => setIsChecked(item.id)}
                color={COLORS.PRIMARY}
                uncheckedColor={COLORS.PRIMARY}
              />
            </Pressable>
          );
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />

      <AppButton title="Continue" onPress={handleOnPress} />
    </View>
  );
};

export default ChooseFloorScreen;
