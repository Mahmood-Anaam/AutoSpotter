import {
  FlatList,
  Text,
  ScrollView,
  Pressable,
  View,
  Image,
} from "react-native";
import React from "react";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import { useNavigation } from "@react-navigation/native";
import { ParkingStates } from "../../utilities/data";
import { ASSETS } from "../../utilities/assets";
import AppButton from "../../components/AppButton";

const BookingScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = React.useState("Ongoing");
  return (
    <ScrollView style={styles.container}>
      <AppBar
        title="My Parking Bookings"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

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

      {isChecked === "Ongoing" && (
        <>
          <ParkingBookingItem
            title="Ongoing Bookings"
            address="Address"
            cost="4.8"
            timer="5"
            ongoing
            nowActive
            imageUrl={ASSETS.ParkingImg}
          />
          <ParkingBookingItem
            title="Ongoing Bookings"
            address="Address"
            cost="4.8"
            timer="5"
            ongoing
            paid
            imageUrl={ASSETS.ParkingImg}
          />
        </>
      )}

      {isChecked === "Completed" && (
        <ParkingBookingItem
          title="Completed Bookings"
          address="Address"
          cost="4.8"
          timer="5"
          completed
          imageUrl={ASSETS.ParkingImg}
        />
      )}

      {isChecked === "Cancelled" && (
        <ParkingBookingItem
          title="Cancelled Bookings"
          address="Address"
          cost="4.8"
          timer="5"
          cancelled
          imageUrl={ASSETS.ParkingImg}
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
  const {
    title,
    address,
    cost,
    timer,
    imageUrl,
    nowActive,
    paid,
    ongoing,
    completed,
    cancelled,
  } = props;
  return (
    <View style={styles.itemContainer}>
      <View
        style={[
          styles.imageTitleContainer,
          cancelled && styles.cancelledWrapper,
        ]}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.address}>{address}</Text>

          <View style={styles.costContainer}>
            <Text style={[styles.title, styles.cost]}>${cost}</Text>

            <Text style={styles.timer}>/{timer} hour</Text>

            <View
              style={[
                styles.statusContainer,
                paid && styles.paidContainer,
                cancelled && styles.cancelledContainer,
                completed && styles.completedContainer,
              ]}
            >
              <Text
                style={[
                  styles.status,
                  paid && styles.paidText,
                  cancelled && styles.cancelledText,
                  completed && styles.completedText,
                ]}
              >
                {nowActive
                  ? "Now Active"
                  : completed
                  ? "Completed"
                  : cancelled
                  ? "Cacelled"
                  : "Paid"}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {ongoing && (
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {nowActive ? "View Timer" : "Cancel Booking"}
            </Text>
          </View>
          <AppButton
            title="View Ticket"
            containerStyle={styles.button}
            linearGradientStyle={styles.button}
          />
        </View>
      )}

      {completed && (
        <View style={[styles.buttonContainer, styles.completedButtonContainer]}>
          <Text style={styles.buttonText}>View Ticket</Text>
        </View>
      )}
    </View>
  );
};
