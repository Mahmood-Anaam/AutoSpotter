import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Pressable,
  Modal,
} from "react-native";
import React, { useState } from "react";
import AppBar from "../../components/AppBar";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { formatDate, logger } from "../../utilities/HelperFunctions";
import { ASSETS } from "../../utilities/assets";
import { SCREENS } from "../../utilities/constants";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../utilities/colors";
import { useStore } from "../../store/store";


const ParkingBookingSummaryScreen = (props) => {

  const { spot } = props.route.params;
  const navigation = useNavigation();
  const { startDate, endDate } = useStore((state) => state.BookingInfo);

  const floor = useStore((state) => state.getFloorBYId)(spot.floorId);
  const gate = useStore((state) => state.getGateBYId)(floor.gateId);
  const parking = useStore((state) => state.getParkingBYId)(gate.parkingId);


  const bookStartDateTime = new Date(startDate);
  const bookEndDateTime = new Date(endDate);
  const duration = ((((endDate - startDate) / 1000) / 60) / 60);

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

  const taxes = (parking.cost * duration * 10) / 100;
  const totalCost = parking.cost * duration + taxes;

  const [visible, setVisible] = useState(false);



  
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);





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
      title: "Cost Without Taxes",
      value: `${parking.cost * duration} SAR`,
    },
    {
      id: 4,
      title: "Taxes & Fees (10%)",
      value: `${taxes} SAR`,
    },
    {
      id: 5,
      title: "Total Cost",
      value: `${totalCost} SAR`,
    },
  ];



  const navigateToChangePaymentCard = () => {
    navigation.navigate(SCREENS.CHANGE_PAYMENT_METHOD_SCREEN, {
      summary,
      pricingSummary,
    });
  };

  const navigateToViewParkingTicketScreen = () => {
    navigation.navigate(SCREENS.PARKING_TICKET_SCREEN, {
      summary,
      pricingSummary,
    });
    hideModal();
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

      {/* <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={ASSETS.masterCardImg} />
          <Text style={styles.cardText}>•••• •••• •••• •••• 4679</Text>
        </View>
        <Pressable onPress={navigateToChangePaymentCard}>
          <Text style={styles.changeText}>Change</Text>
        </Pressable>
      </View> */}

      <AppButton
        title= "Payment Card"//"Confirm Payment"
        containerStyle={styles.buttonContainer}
        onPress={navigateToChangePaymentCard}   //{showModal}
      />
{/* 
      {visible && (
        <ModalComponent
          hideModal={hideModal}
          navigateToTicketScreen={navigateToViewParkingTicketScreen}
          visible={visible}
        />
      )} */}
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








const ModalComponent = (props) => {
  const { visible, hideModal, navigateToTicketScreen } = props;

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalContainerStyle}>
        <View style={styles.modalContentStyle}>
          <Image source={ASSETS.SuccessfulPng} />

          <Text style={styles.modalText}>
            Successfully made payment for your parking.
          </Text>

          <AppButton
            title="View Parking Ticket"
            onPress={navigateToTicketScreen}
          />

          <AppButton
            title="Cancel"
            onPress={hideModal}
            GradientColors={COLORS.GRADIENT2}
            titleStyle={styles.btnTitleStyle}
          />
        </View>
      </View>
    </Modal>
  );
};
