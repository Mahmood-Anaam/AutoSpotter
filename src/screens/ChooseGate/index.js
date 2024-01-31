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




const ChooseGateScreen = (props) => {

  const { gates } = props.route.params;
  const navigation = useNavigation();

  if (gates.length == 0) {
    return (
      <View style={styles.container}>
        <AppBar
          title="Choose Gate"
          leftIcon
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          containerStyle={styles.containerStyle}
        />
        <Text style={styles.emptyListText}>No gates have been added to this parking yet.</Text>
      </View>
    );
  }



  const [isChecked, setIsChecked] = useState(gates[0].id);
  const getFloorsBYGateId = useStore((state) => state.getFloorsBYGateId);

  const handleOnPress = () => {
    // const floors = getFloorsBYGateId(isChecked);

    // navigation.navigate(SCREENS.PICK_PARKING_SPOT_SCREEN, { floors });
    const parkingId = gates.find((gate) => {
      return gate.id == isChecked;
    }).parkingId;
    const gateId = isChecked;
    navigation.navigate(SCREENS.PARKING_BOOKING_DETAIL_SCREEN, { parkingId,gateId });
    // navigation.navigate(SCREENS.CHOOSE_FLOOR_SCREEN, { floors,parkingId });
  };

  return (
    <View style={styles.container}>
      <AppBar
        title="Choose Gate"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <FlatList
        data={gates}
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
              <Image source={ASSETS.GateImg} style={styles.image} />
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

export default ChooseGateScreen;
