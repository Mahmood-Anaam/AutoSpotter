import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
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

const ChangePaymentCardScreen = (props) => {
  const navigation = useNavigation();
  const { summary, pricingSummary } = props.route.params;
  const PaymentMethodsUser = useStore((state) => state.PaymentMethodsUser);

  const [isChecked, setIsChecked] = React.useState("masterCard");


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
          const { title, checked } = item;
          return (
            <PaymentItem
              title={title}
              checked={checked}
              isChecked={isChecked}
              onPress={() => {
                setIsChecked(checked);
              }}
            />
          );
        }}
      />


      <AppButton
        title="Add New Card"
        addSvg
        GradientColors={COLORS.GRADIENT2}
        titleStyle={styles.titleStyle}
        containerStyle={styles.continueButton}
        onPress={() => {
          navigation.navigate(SCREENS.ADD_NEW_Card_SCREEN);
        }}
      />

      {PaymentMethodsUser.length > 0 && (
        <AppButton
          title="Continue"
          onPress={() => {
            navigation.navigate(SCREENS.PARKING_TICKET_SCREEN, {
              summary,
              pricingSummary,
            });
          }}
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
