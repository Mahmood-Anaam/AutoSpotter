import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AppBar from "../../components/AppBar";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ApplePaySVG, GoogleSVG, PaypalSVG } from "../../components/SVG/SVG";
import { ASSETS } from "../../utilities/assets";
import { RadioButton } from "react-native-paper";
import { COLORS } from "../../utilities/colors";
import AppButton from "../../components/AppButton";
import { SCREENS } from "../../utilities/constants";
import { useStore } from "../../store/store";
import { getAuth } from "firebase/auth";
import { BookingSpot } from "../../repositorys/APIRepository";
import Toast from "react-native-simple-toast";
import LottieView from "lottie-react-native";

const ChangePaymentCardScreen = (props) => {
  const navigation = useNavigation();
  const { summary, pricingSummary } = props.route.params;
  const PaymentMethodsUser = useStore((state) => state.PaymentMethodsUser);
  const [isChecked, setIsChecked] = useState(
    PaymentMethodsUser.length > 0 ? PaymentMethodsUser[0] : ""
  );
  const addBookingInfo = useStore((state) => state.addBookingInfo);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const user = getAuth().currentUser;
  const getBookingInfo = useStore((state) => state.getBookingInfo);
  const [isLoading, setIsLoading] = useState(null);

  const navigateToViewParkingTicketScreen = () => {
    navigation.navigate(SCREENS.PARKING_TICKET_SCREEN, {
      summary,
      pricingSummary,
    });
    hideModal();
  };

  // ................................................

  const onConfirmPaymentHandler = async () => {
    setIsLoading(true);
    const card = { ...isChecked };
    addBookingInfo({
      userId: user.uid,
      cvv: card.cvv,
      cardNumber: card.cardNumber,
      validThru: card.validThru,
      cardHolderName: card.cardHolderName,
      type: card.checked,
    });

    const { docId, msg } = await BookingSpot(getBookingInfo());

    setIsLoading(false);

    if (docId != null) {
      addBookingInfo({ docId });
      showModal();
    } else {
      Toast.show(msg, Toast.LONG);
    }
  };

  // ................................................
  return (
    <ScrollView style={styles.container}>
      <AppBar
        title="Payment"
        leftIcon
        rightIcon
        scanIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <Text style={styles.title}>Choose Payment Methods</Text>

      <FlatList
        data={PaymentMethodsUser}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <PaymentItem
              title={item.title}
              checked={item.checked}
              isChecked={isChecked.checked}
              onPress={() => {
                setIsChecked(item);
              }}
            />
          );
        }}
      />

      {isLoading && (
        <LottieView
          CENTER={true}
          source={ASSETS.loading}
          style={styles.lottieStyle}
          autoPlay
          loop
        />
      )}

      {!isLoading && (
        <AppButton
          title="Add New Card"
          addSvg
          GradientColors={COLORS.GRADIENT3}
          titleStyle={styles.titleStyle}
          onPress={() => {
            navigation.navigate(SCREENS.ADD_NEW_Card_SCREEN);
          }}
        />
      )}

      {PaymentMethodsUser.length > 0 && !isLoading && (
        <AppButton
          title="Confirm Payment"
          containerStyle={[styles.continueButton]}
          onPress={onConfirmPaymentHandler}
        />
      )}

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

export default ChangePaymentCardScreen;

const PaymentItem = (props) => {
  const { title, checked, isChecked, onPress } = props;

  return (
    <Pressable onPress={onPress} style={styles.paymentItem}>
      <View style={styles.paymentItemContainer}>
        {checked === "paypal" && <PaypalSVG size={50} />}
        {checked === "googlePay" && <GoogleSVG size={50} />}
        {checked === "applePay" && <ApplePaySVG size={50} />}
        {checked === "masterCard" && (
          <Image source={ASSETS.masterCardImg} style={styles.image} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.paymentTitle}>{title}</Text>
        </View>
      </View>
      <RadioButton
        value={checked}
        status={isChecked === checked ? "checked" : "unchecked"}
        onPress={onPress}
        color={COLORS.PRIMARY}
        uncheckedColor={COLORS.PRIMARY}
      />
    </Pressable>
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
