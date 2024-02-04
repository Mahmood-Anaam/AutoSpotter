import {
  Text,
  ImageBackground,
  ScrollView,
  View,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../../components/AppBar";
import { ASSETS } from "../../utilities/assets";
import { PaymentMethods } from "../../utilities/data";
import {
  ApplePaySVG,
  GoogleSVG,
  MasterCardSVG,
  PaypalSVG,
} from "../../components/SVG/SVG";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import Toast from "react-native-simple-toast";
import { useStore } from "../../store/store";

const AddNewPaymentCardScreen = () => {
  const navigation = useNavigation();
  const addToPaymentMethodsUser = useStore(
    (state) => state.addToPaymentMethodsUser
  );
  const PaymentMethodsUser = useStore((state) => state.PaymentMethodsUser);
  const [checkedMasterCard, setCheckedMasterCard] = useState(PaymentMethods[3]);

  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [validThru, setValidThru] = useState("");
  const [cvv, setCvv] = useState("");

  const formatCardNumber = (input) => {
    const digitsOnly = input.replace(/\D/g, "");

    let formatted = "";
    for (let i = 0; i < digitsOnly.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += " ";
      }
      formatted += digitsOnly[i];
    }
    return formatted;
  };

  const handleCardNumberChange = (input) => {
    const formatted = formatCardNumber(input);
    setCardNumber(formatted);
  };

  const formatValidThru = (input) => {
    const digitsOnly = input.replace(/\D/g, "");

    let formatted = digitsOnly.substring(0, 2);
    if (digitsOnly.length > 2) {
      formatted += " / " + digitsOnly.substring(2);
    }
    return formatted;
  };

  const handleValidThruChange = (input) => {
    const formatted = formatValidThru(input);
    setValidThru(formatted);
  };

  const handleOnAddCardPress = () => {
    if (!cardHolderName) {
      Toast.show("Please enter Card Holder Name", Toast.LONG);
      return;
    }
    if (!cardNumber) {
      Toast.show("Please enter card number", Toast.LONG);
      return;
    }
    if (!validThru) {
      Toast.show("Please enter valid thru", Toast.LONG);
      return;
    }
    if (!cvv) {
      Toast.show("Please enter CVV", Toast.LONG);
      return;
    }

    const card = {
      id: PaymentMethodsUser.length + 1,
      cvv: cvv,
      cardNumber: cardNumber,
      validThru: validThru,
      cardHolderName: cardHolderName,
      title: checkedMasterCard.title,
      checked: checkedMasterCard.checked,
    };

    addToPaymentMethodsUser(card);
    Toast.show("Successfully added new card", Toast.LONG);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <AppBar
        title="Add New Card"
        leftIcon
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <ImageBackground
        source={ASSETS.CardImg}
        style={styles.cardImg}
        borderRadius={16}
        resizeMode={"cover"}
        resizeMethod={"auto"}
      >
        <View style={styles.cardImgContainer}>
          <View style={styles.debitTextWrapper}>
            <Text style={styles.cardText}>Debit</Text>
          </View>

          <View style={styles.cardNumberWrapper}>
            {[...Array(4)].map((_, index) => (
              <Text key={index} style={styles.cardText}>
                {cardNumber.length > index * 5
                  ? cardNumber.substring(index * 5, (index + 1) * 5)
                  : "****"}
              </Text>
            ))}

            <View style={styles.validThruWrapper}>
              <Text style={styles.validThru}>Valid </Text>
              <Text style={styles.validThru}>Thru</Text>
            </View>

            <Text style={styles.cardText}>
              {validThru.substring(0, 2) || "MM"}
            </Text>

            <Text style={styles.cardText}>
              {validThru.substring(2) || " / YY"}
            </Text>
          </View>

          <View style={styles.cardNameWrapper}>
            <Text style={styles.cardText}>
              {cardHolderName || "Cameron Williamson"}
            </Text>

            {checkedMasterCard.checked == "paypal" && <PaypalSVG size={48} />}
            {checkedMasterCard.checked == "googlePay" && (
              <GoogleSVG size={48} />
            )}
            {checkedMasterCard.checked == "applePay" && (
              <ApplePaySVG size={48} />
            )}
            {checkedMasterCard.checked == "masterCard" && <MasterCardSVG />}
          </View>
        </View>
      </ImageBackground>

      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={PaymentMethods}
        contentContainerStyle={styles.listItemContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => setCheckedMasterCard(item)}
              style={[
                styles.listItemWrapper,
                item.checked == checkedMasterCard.checked &&
                  styles.listItemWrapperChecked,
              ]}
            >
              {item.checked == "paypal" && <PaypalSVG />}
              {item.checked == "googlePay" && <GoogleSVG />}
              {item.checked == "applePay" && <ApplePaySVG />}
              {item.checked == "masterCard" && <MasterCardSVG />}
            </Pressable>
          );
        }}
      />

      <View style={styles.contentWrapper}>
        <AppTextInput
          placeholder="Cameron Williamson"
          value={cardHolderName}
          onChangeText={setCardHolderName}
        />

        <AppTextInput
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={handleCardNumberChange}
        />

        <View style={styles.expiryCvvWrapper}>
          <AppTextInput
            placeholder="Valid Thru"
            value={validThru}
            onChangeText={handleValidThruChange}
            containerStyle={styles.validThruInput}
          />

          <AppTextInput
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            containerStyle={styles.cvvInput}
          />
        </View>

        <AppButton 
        title="Add New Card" 
        containerStyle={[styles.continueButton]} 
        onPress={handleOnAddCardPress} />
      </View>
    </ScrollView>
  );
};

export default AddNewPaymentCardScreen;
