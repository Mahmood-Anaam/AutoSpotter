import {
  FlatList,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import { SCREENS } from "../../utilities/constants";
import { useNavigation } from "@react-navigation/native";
import { ASSETS } from "../../utilities/assets";
import { CheckSVG } from "../../components/SVG/SVG";
import AppButton from "../../components/AppButton";
import Toast from "react-native-simple-toast";
import LottieView from "lottie-react-native";
import { useStore } from "../../store/store";
import { loadAvailableFloorSpots } from "../../repositorys/APIRepository";


const PickParkingSpotScreen = (props) => {
  const navigation = useNavigation();
  const { floors } = props.route.params;

  if (floors.length == 0) {
    return (
      <View style={styles.container}>
        <AppBar
          title="Pick Parking Spot"
          leftIcon
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          containerStyle={styles.containerStyle}
        />
        <Text style={styles.emptyListText}>
          No floors have been added to this gates yet.
        </Text>
      </View>
    );
  }

  const [checkedFloor, setCheckedFloor] = useState(floors[0]);
  const [checkedSpot, setCheckedSpot] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [availableSpotsCurrents, SetavailableSpotsCurrents] = useState([]);
  const BookingInfo = useStore((state) => state.BookingInfo);
  const addBookingInfo = useStore((state) => state.addBookingInfo);




  const onButtonPress = () => {
    if (checkedSpot === "") {
      Toast.show("Pls select a spot.", Toast.LONG);
    } else {
      addBookingInfo({spotId: checkedSpot.id,spotName:checkedSpot.name});
      navigation.navigate(SCREENS.PARKING_BOOKING_SUMMARY_SCREEN,{spot:checkedSpot});



      // navigation.navigate(SCREENS.PARKING_BOOKING_DETAIL_SCREEN);
      // navigation.navigate(SCREENS.PARKING_BOOKING_SUMMARY_SCREEN, {
      //   item,
      //   chosenGate,
      //   checkedSpot,
      //   checkedFloor,
      //   startTime,
      //   endTime,
      //   duration,
      //   date: selected,
      // });
    }
  };

  useEffect(() => {
    async function fetch() {
      const parmes = { floorId: checkedFloor.id, ...BookingInfo };
      await loadAvailableFloorSpots(parmes).then((respons) => {
        const { spots, errorMsg } = respons;
        if (errorMsg === null) {
          SetavailableSpotsCurrents(spots);
          console.log("sucess loading Available Floor Spots data from API");
        } else {
          console.log(
            "Error loading Available Floor Spots data from API: (" + errorMsg + ")"
          );
          Toast.show(
            "Error loading Available Floor Spots data from API: (" + errorMsg + ")",
            Toast.CENTER
          );
        }
      });

      setIsLoading(false);
    }

    fetch();
  }, [isFetching]);


  return (
    <ScrollView style={styles.container} scrollEnabled={false} >
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
                  setIsLoading(true);
                  setIsFetching(!isFetching);
                  SetavailableSpotsCurrents([]);


                }}
                name={item.name}
                checked={item.id === checkedFloor.id}
              />
            </View>
          );
        }}
      />


      {!isLoading && (


        <FlatList
          horizontal
          data={availableSpotsCurrents}
          scrollEnabled={false}
          nestedScrollEnabled={true}
          keyExtractor={(item) => item.id}

          ListEmptyComponent={

            <View style={styles.emptyListContainer}>
              <Text style={styles.emptyListText}>
                No Spots Available
              </Text>
            </View>



          }


          renderItem={({ item }) => {
            return (
              <View key={item} style={styles.allSpotsRowContainer}>
                <View style={styles.spotRowWrapper}>
                  <ParkingSpotItem
                    status={"available"}
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


      {!isLoading && (
        <AppButton
          onPress={onButtonPress}
          title="Continue"
          containerStyle={styles.continueBtn}
        />
      )}





      {isLoading && (

        <LottieView
          CENTER={true}
          source={ASSETS.loading}
          style={styles.lottieStyle}
          autoPlay
          loop
        />

      )}






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
      onPress={onPress}
      style={[
        styles.spotItemWrapper,
        status == "available" && styles.mainWrapper,
        status === "available" && styles.availableContainer,
        isChecked && styles.checkedWrapper,
      ]}
    >

      {status === "available" && (
        <View style={styles.bookedWrapper}>
          <CheckSVG size={24} />
          <Text style={styles.bookedText}>{name}</Text>
        </View>
      )}
    </Pressable>
  );
};
