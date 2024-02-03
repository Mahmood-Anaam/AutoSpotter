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
  const BookingInfo = useStore((state) => state.BookingInfo);

  const { summary, pricingSummary } = props.route.params;

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
      title1: summary[0]["title"],
      title2: summary[1]["title"],
      value1: summary[0]["value"],
      value2: summary[1]["value"],
    },
    {
      id: 3,
      title1: summary[2]["title"],
      title2: summary[3]["title"],
      value1: summary[2]["value"],
      value2: summary[3]["value"],
    },
    {
      id: 4,
      title1: summary[4]["title"],
      title2: summary[5]["title"],
      value1: summary[4]["value"],
      value2: summary[5]["value"],
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

        <QRCode value={BookingInfo.docId} size={180} />

        <FlatList
          data={infoData}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => <InfoItem {...item} />}
        />
      </View>

      <AppButton
        title="Go back to Parking Home"
        onPress={() => {
          navigation.replace(SCREENS.HOME_SCREEN);
        }}
      />
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

