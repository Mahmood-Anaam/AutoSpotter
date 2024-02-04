import {
  View,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AppBar from "../../components/AppBar";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { SCREENS } from "../../utilities/constants";
import AppButton from "../../components/AppButton";
import { useStore } from "../../store/store";


const ParkingBookingSummaryScreen = (props) => {

  const { spot } = props.route.params;
  const navigation = useNavigation();
  const { startDate, endDate,duration,costTotal } = useStore((state) => state.BookingInfo);

  const floor = useStore((state) => state.getFloorBYId)(spot.floorId);
  const gate = useStore((state) => state.getGateBYId)(floor.gateId);
  const parking = useStore((state) => state.getParkingBYId)(gate.parkingId);



  const bookStartDateTime = new Date(startDate);
  const bookEndDateTime = new Date(endDate);


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





  const summary = [
    {
      id: 1,
      title: "Parking Area",
      value: parking.name,
    },
    {
      id: 2,
      title: "Address",
      value: parking.address,
    },
    {
      id: 3,
      title: "Gate",
      value: gate.name,
    },
    {
      id: 4,
      title: "Parking Spot",
      value: `${floor.name} (${spot.name})`,
    },
    {
      id: 5,
      title: "Start Date",
      value: bookStartDateTimeFormat,
    },
    {
      id: 6,
      title: "End Date",
      value: bookEndDateTimeFormat,
    },
  ];



  const pricingSummary = [
    {
      id: 1,
      title: "Cost Per Hour",
      value: `${parking.cost} SAR`,
    },
    {
      id: 2,
      title: "Duration",
      value: `${duration} Hours`,
    },
    {
      id: 3,
      title: "Total Cost",
      value: `${costTotal} SAR`,
    },
    
 
  ];



  const navigateToChangePaymentCard = () => {
    navigation.navigate(SCREENS.CHANGE_PAYMENT_METHOD_SCREEN);
  };




  return (
    <ScrollView style={styles.container}>
      <AppBar
        title="Review Summary"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <FlatList
        data={summary}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => {
          return <CardItem title={item.title} value={item.value} />;
        }}
      />

      <FlatList
        data={pricingSummary}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <CardItem title={item.title} value={item.value} />
        )}
      />


      <AppButton
        title= "Payment Card"
        containerStyle={styles.buttonContainer}
        onPress={navigateToChangePaymentCard}   
      />


    </ScrollView>
  );
};

export default ParkingBookingSummaryScreen;

const CardItem = (props) => {
  const { title, value } = props;
  return (
    <View style={styles.cardItem}>
      <Text style={styles.cardItemTitle}>{title}</Text>
      <Text style={styles.cardItemValue}>{value}</Text>
    </View>
  );
};









