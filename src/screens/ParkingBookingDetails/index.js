import React, { useState, useEffect } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import styles from "./styles";
import { getCurrentTime, logger } from "../../utilities/HelperFunctions";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../../components/AppBar";
import { Calendar } from "react-native-calendars";
import { COLORS } from "../../utilities/colors";
import Slider from "@react-native-community/slider";
import { WIDTH } from "../../utilities/responsive";
import { ArrowRightSVG, TimerSVG } from "../../components/SVG/SVG";
import AppButton from "../../components/AppButton";
import Toast from "react-native-simple-toast";
import { SCREENS } from "../../utilities/constants";
import { useStore } from "../../store/store";

const ParkingBookingDetailsScreen = () => {

  const deleteBookingInfo = useStore((state) => state.deleteBookingInfo);
  const addBookingInfo = useStore((state) => state.addBookingInfo);

  const navigation = useNavigation();
  

  const [selected, setSelected] = useState("");
  const [duration, setDuration] = useState(1);
  const [startTime, setStartTime] = useState(getCurrentTime());
  const [endTime, setEndTime] = useState(getCurrentTime());

  const calculateEndTime = () => {
    const [startHour] = startTime.split(":").map(Number);
    const endHour = startHour + duration;
    const formattedEndTime =
      (endHour % 12 || 12) + ":00 " + (endHour < 12 ? "AM" : "PM");
    setEndTime(formattedEndTime);
  };

  const handleSliderChange = (value) => {
    const clampedValue = Math.max(0, Math.min(24, value));
    setDuration(clampedValue);
    calculateEndTime();
  };

  const handleDayPress = (day) => {
    setSelected(day.dateString);
    setStartTime("00:00");
    setEndTime("00:00");
    logger(day);
  };

  const onButtonPress = () => {
    if (selected === "") {
      Toast.show("Pls select a date.", Toast.LONG);
      return;
    }
    if (endTime === "00:00") {
      Toast.show("Pls select end time.", Toast.LONG);
      return;
    }
    if (endTime < startTime) {
      Toast.show("End time should be greater than start time.", Toast.LONG);
      return;
    }
    if (endTime === startTime) {
      Toast.show("End time should be greater than start time.", Toast.LONG);
      return;
    }

    navigation.navigate(SCREENS.PARKING_BOOKING_SUMMARY_SCREEN, {
      item,
      chosenGate,
      checkedSpot,
      checkedFloor,
      startTime,
      endTime,
      duration,
      date: selected,
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <AppBar
        title="Book Parking Details"
        leftIcon
        onLeftIconPress={() => {
          deleteBookingInfo();
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <Text style={styles.titleText}>Select Date</Text>

      <Calendar
        style={styles.calendar}
        onDayPress={handleDayPress}
        theme={{
          calendarBackground: COLORS.LIGHT_BLUE_WHITE,
        }}
        hideExtraDays
        enableSwipeMonths
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: COLORS.PRIMARY,
          },
        }}
      />

      <Text style={styles.titleText}>Duration</Text>

      <Slider
        style={{ width: WIDTH * 0.9, height: 40 }}
        minimumValue={1}
        maximumValue={23}
        step={1}
        value={duration}
        onValueChange={handleSliderChange}
        trackStyle={styles.track}
        thumbTintColor={COLORS.PRIMARY}
        minimumTrackTintColor={COLORS.PRIMARY}
        maximumTrackTintColor={COLORS.PRIMARY}
      />

      <View style={styles.viewWrapper}>
        <View style={styles.wrapper}>
          <Text style={styles.titleText}>Start Hour</Text>

          <View style={styles.timeWrapper}>
            <Text style={styles.timeText}>{startTime}</Text>

            <TimerSVG size={24} />
          </View>
        </View>

        <View style={styles.arrowContainer}>
          <ArrowRightSVG size={24} />
        </View>

        <View style={styles.wrapper}>
          <View>
            <Text style={styles.titleText}>End Hour</Text>
          </View>

          <View style={styles.timeWrapper}>
            <Text style={styles.timeText}>{endTime}</Text>

            <TimerSVG size={24} />
          </View>
        </View>
      </View>

      <Text style={styles.titleText}>Total</Text>

      <Text style={styles.cardCost}>
        <Text style={styles.cardColoredCost}>$ 8.00</Text> / {duration} hours
      </Text>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Continue"
          containerStyle={styles.btn}
          onPress={onButtonPress}
        />
      </View>
    </ScrollView>
  );
};

export default ParkingBookingDetailsScreen;