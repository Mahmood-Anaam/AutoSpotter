import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Pressable,
  Modal,
} from "react-native";
import React from "react";
import AppBar from "../../components/AppBar";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { formatDate, logger } from "../../utilities/HelperFunctions";
import { ASSETS } from "../../utilities/assets";
import { SCREENS } from "../../utilities/constants";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../utilities/colors";

const ParkingBookingSummaryScreen = (props) => {
  const navigation = useNavigation();
  const {
    item,
    chosenGate,
    checkedSpot,
    checkedFloor,
    startTime,
    endTime,
    duration,
    date,
  } = props.route.params;

  const { title, address, cost } = item;

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const checkedFloorText = (floor) => {
    switch (floor) {
      case "first":
        return "1st Floor";
      case "second":
        return "2nd Floor";
      case "third":
        return "3rd Floor";
    }
  };

  const parkingSpot =
    checkedFloorText(checkedFloor) + " ( " + checkedSpot + " ) ";

  const parkingCostPerHour = " $ " + cost;

  const start = startTime === "00:00" ? "00:00 AM" : startTime;
  const Hours = start + " - " + endTime;
  const durationHours = duration + " Hours";
  const chosenData = formatDate(date);
  const costWithoutTaxes = cost * duration;
  const taxes = (cost * duration * 10) / 100;
  const totalCost = cost * duration + taxes;

  const summary = [
    {
      id: 1,
      title: "Parking Area",
      value: title,
    },
    {
      id: 2,
      title: "Address",
      value: address,
    },
    {
      id: 3,
      title: "Gate",
      value: chosenGate.title,
    },
    {
      id: 4,
      title: "Parking Spot",
      value: parkingSpot,
    },
    {
      id: 5,
      title: "Date",
      value: chosenData,
    },
    {
      id: 6,
      title: "Hours",
      value: Hours,
    },
  ];

  const pricingSummary = [
    {
      id: 1,
      title: "Cost Per Hour",
      value: parkingCostPerHour,
    },
    {
      id: 2,
      title: "Duration",
      value: durationHours,
    },
    {
      id: 3,
      title: "Cost Without Taxes",
      value: " $ " + costWithoutTaxes,
    },
    {
      id: 4,
      title: "Taxes & Fees (10%)",
      value: " $ " + taxes,
    },
    {
      id: 5,
      title: "Total Cost",
      value: " $ " + totalCost,
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

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={ASSETS.masterCardImg} />
          <Text style={styles.cardText}>•••• •••• •••• •••• 4679</Text>
        </View>
        <Pressable onPress={navigateToChangePaymentCard}>
          <Text style={styles.changeText}>Change</Text>
        </Pressable>
      </View>

      <AppButton
        title="Confirm Payment"
        containerStyle={styles.buttonContainer}
        onPress={showModal}
      />

      {visible && (
        <ModalComponent
          hideModal={hideModal}
          navigateToTicketScreen={navigateToViewParkingTicketScreen}
          visible={visible}
        />
      )}
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
