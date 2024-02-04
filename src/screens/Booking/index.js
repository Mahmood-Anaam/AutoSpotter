import {
  FlatList,
  Text,
  ScrollView,
  Pressable,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import { useNavigation } from "@react-navigation/native";
import { ParkingStates } from "../../utilities/data";
import { ASSETS } from "../../utilities/assets";
import AppButton from "../../components/AppButton";
import { useStore } from "../../store/store";
import LottieView from "lottie-react-native";
import Toast from "react-native-simple-toast";
import { loadParkingBookings } from "../../repositorys/firestoreRepository";
import { SCREENS } from "../../utilities/constants";


const BookingScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = React.useState("Ongoing");

  const [isLoading, setIsLoading] = useState(true);
  const setParkingBookings = useStore((state) => state.setParkingBookings);

  const getParkingBookingsByStatus = useStore(
    (state) => state.getParkingBookingsByStatus
  );

  useEffect(() => {
    async function fetch() {
      await loadParkingBookings().then((respons) => {
        const { ParkingBookings, error } = respons;
        if (error === "") {
          setParkingBookings(ParkingBookings);
        } else {
          console.log(error);
          Toast.show(
            "Error getting parking bookings data from firebase: (" +
              error +
              ")",
            Toast.CENTER
          );
        }
      });

      setIsLoading(false);
    }

    fetch();
  }, [isLoading]);


  const onViewTicketHandler = () => {
    console.log("pressss");
    navigation.navigate(SCREENS.PARKING_TICKET_SCREEN, {booking});
  };






  return (
    <ScrollView style={styles.container} scrollEnabled={false}>
      <AppBar
        title="My Parking Bookings"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
          
        }}
        containerStyle={styles.containerStyle}
      />

      {!isLoading && (
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ParkingStates}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const { title, checked } = item;
              return (
                <FlootItem
                  onPress={() => setIsChecked(checked)}
                  title={title}
                  checked={checked === isChecked}
                />
              );
            }}
          />
        </View>
      )}

      {!isLoading && (
        <View>
          <FlatList
            scrollEnabled={false}
            nestedScrollEnabled={true}
            data={
              isChecked === "Ongoing"
                ? getParkingBookingsByStatus("unavailable")
                : getParkingBookingsByStatus("complete")
            }
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ParkingBookingItem
                  booking={item}
                  isOngoing={isChecked === "Ongoing"}
                  onViewTicketHandler={()=>{
                    navigation.navigate(SCREENS.PARKING_TICKET_SCREEN,{booking:item});
                  }}
                />
              );
            }}
          />
        </View>
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

export default BookingScreen;

const FlootItem = (props) => {
  const { title, checked, onPress } = props;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.floorContainer, checked && styles.checkedFloorContainer]}
    >
      <Text style={[styles.floorText, checked && styles.checkedFloorText]}>
        {title}
      </Text>
    </Pressable>
  );
};

const ParkingBookingItem = (props) => {
  const { booking, isOngoing,onViewTicketHandler } = props;

  const parking = useStore((state) => state.getParkingBYId)(booking.parkingId);



  return (
    <View style={styles.itemContainer}>
      <View style={[styles.imageTitleContainer, styles.cancelledWrapper]}>
        <Image source={{ uri: parking.imageUrl }} style={styles.image} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{parking.name}</Text>

          <Text style={styles.address}>{parking.address}</Text>

          <View style={styles.costContainer}>
            <Text style={[styles.title, styles.cost]}>SAR {parking.cost}</Text>

            <Text style={styles.timer}>/{booking.duration} hour</Text>
          </View>
        </View>
      </View>

      {isOngoing && (
        <View style={styles.buttonWrapper}>
          <AppButton
            title="View Ticket"
            containerStyle={styles.button}
            linearGradientStyle={styles.button}
            onPress={()=>onViewTicketHandler()}
          />
        </View>
      )}

      {!isOngoing && (
        <Pressable
          style={[styles.buttonContainer, styles.completedButtonContainer]}
          onPress={()=>onViewTicketHandler()}
        >
          <Text style={styles.buttonText}>View Ticket</Text>
        </Pressable>
      )}
    </View>
  );
};
