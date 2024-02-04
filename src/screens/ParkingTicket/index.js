import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import AppBar from "../../components/AppBar";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import QRCode from "react-native-qrcode-svg";
import AppButton from "../../components/AppButton";
import { SCREENS } from "../../utilities/constants";
import { getAuth } from "firebase/auth";
import { useStore } from "../../store/store";

const ParkingTicketScreen = (props) => {
  
  const navigation = useNavigation();
  const user = getAuth().currentUser;
  const name = user.displayName == null ? "" : user.displayName;
  const phoneNumber = user.phoneNumber == null ? "" : user.phoneNumber;
  

  const { booking } = props.route.params;
  const parking = useStore((state) => state.getParkingBYId)(booking.parkingId);
  const gate = useStore((state) => state.getGateBYId)(booking.gateId);

  const bookStartDateTime = new Date(booking.startDate);
  const bookEndDateTime = new Date(booking.endDate);


  const bookStartDateTimeFormat = bookStartDateTime.toLocaleTimeString("en-GB", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    month: "numeric",
    day: "numeric",
    year: "numeric"
  }).replaceAll("/", "-");


  const bookEndDateTimeFormat = bookEndDateTime.toLocaleTimeString("en-GB", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    month: "numeric",
    day: "numeric",
    year: "numeric"
  }).replaceAll("/", "-");


  const infoData = [
    {
      id: 1,
      title1: "Name",
      title2: "Phone Number",
      value1: name,
      value2: phoneNumber,
    },
    {
      id: 2,
      title1: "Parking Area",
      title2: "Address",
      value1: parking.name,
      value2: parking.address,
    },
    {
      id: 3,
      title1: "Gate",
      title2: "Parking Spot",
      value1: gate.name,
      value2: `${booking.spotName} `
    },
    {
      id: 4,
      title1: "Start Date",
      title2: "End Date",
      value1: bookStartDateTimeFormat,
      value2: bookEndDateTimeFormat,
    },
  
  ];

  return (
    <View style={styles.container}>
      <AppBar
        title="Parking Ticket"
        leftIcon
        rightIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Scan this on the scanner machine when you are in the parking lot
        </Text>

        <QRCode value={booking.id} size={180} />

        <FlatList
          data={infoData}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => <InfoItem {...item} />}
        />
      </View>


    </View>
  );
};

export default ParkingTicketScreen;

const InfoItem = (props) => {
  const { title1, title2, value1, value2 } = props;
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>{title1}</Text>
        <Text style={styles.infoValue}>{value1}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>{title2}</Text>
        <Text style={styles.infoValue}>{value2}</Text>
      </View>
    </View>
  );
};

