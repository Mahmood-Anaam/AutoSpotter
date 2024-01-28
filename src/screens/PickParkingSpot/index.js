import {
  FlatList,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import { SCREENS } from "../../utilities/constants";
import { useNavigation } from "@react-navigation/native";
import { ASSETS } from "../../utilities/assets";
import { CheckSVG } from "../../components/SVG/SVG";
import AppButton from "../../components/AppButton";
import Toast from "react-native-simple-toast";
import { useStore } from "../../store/store";

const PickParkingSpotScreen = (props) => {

  const navigation = useNavigation();
  const { floors } = props.route.params;
  const addBookingInfo = useStore((state) => state.addBookingInfo);
  const [checkedFloor, setCheckedFloor] = React.useState(floors[0]);
  const [checkedSpot, setCheckedSpot] = React.useState("");





  const onButtonPress = () => {
    if (checkedSpot === "") {
      
      Toast.show("Pls select a spot.", Toast.LONG);
    } else {

      addBookingInfo({floorId:checkedFloor.id,spotId:checkedSpot.id});
      navigation.navigate(SCREENS.PARKING_BOOKING_DETAIL_SCREEN);
    }
  };

  return (
    <ScrollView style={styles.container} scrollEnabled={false}>

      <AppBar
        title="Pick Parking Spot"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={floors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {

          return (
            <View>
              <FlootItem
                onPress={() => {
                  setCheckedFloor(item);
                  setCheckedSpot("");

                }}
                name={item.name}
                checked={item.id === checkedFloor.id}
              />
            </View>
          );
        }}
      />

      {checkedFloor && (



        <FlatList
          horizontal
          data={checkedFloor.spots}
          scrollEnabled={false}
          nestedScrollEnabled={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View key={item} style={styles.allSpotsRowContainer}>
                <View style={styles.spotRowWrapper}>

                  <ParkingSpotItem
                    status={item.status}
                    name={item.name}
                    isChecked={item.id === checkedSpot.id}
                    onPress={() => setCheckedSpot(item)}
                  />


                </View>

              </View>
            );
          }}
        />


      )}

      <AppButton
        onPress={onButtonPress}
        title="Continue"
        containerStyle={styles.continueBtn}
      />
    </ScrollView>
  );
};

export default PickParkingSpotScreen;

const FlootItem = (props) => {
  const { name, checked, onPress } = props;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.floorContainer, checked && styles.checkedFloorContainer]}
    >
      <Text style={[styles.floorText, checked && styles.checkedFloorText]}>
        {name}
      </Text>
    </Pressable>
  );
};

const ParkingSpotItem = (props) => {
  const { name, status, isChecked, onPress } = props;
  return (
    <Pressable
      disabled={status === "booked" || status === "not available"}
      onPress={onPress}
      style={[
        styles.spotItemWrapper,
        status !== "not available" && styles.mainWrapper,
        status === "not available" && styles.notAvailableContainer,
        status === "available" && styles.availableContainer,
        status === "booked" && styles.bookedContainer,
        isChecked && styles.checkedWrapper,
      ]}
    >
      {status === "not available" && (
        <Image source={ASSETS.SpotCarImg} style={styles.image} />
      )}

      {status === "available" && (
        <Text style={[styles.spotText, isChecked && styles.checkedText]}>
          {name}
        </Text>
      )}

      {status === "booked" && (
        <View style={styles.bookedWrapper}>
          <CheckSVG size={24} />
          <Text style={styles.bookedText}>{name}</Text>
        </View>
      )}
    </Pressable>
  );
};
