import React, { useState, useEffect } from "react";
import { ScrollView, Text, TextInput, View, Pressable } from "react-native";
import styles from "./styles";
import {
  getCurrentTime,
  formatDate,
  formatTime,
  logger,
} from "../../utilities/HelperFunctions";
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
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ParkingBookingDetailsScreen = (props) => {
  const { parkingId, gateId } = props.route.params;
  const navigation = useNavigation();
  const chooseParking = useStore((state) => state.getParkingBYId)(parkingId);
  const getFloorsBYGateId = useStore((state) => state.getFloorsBYGateId);
  const setBookingInfo = useStore((state) => state.setBookingInfo);
  const addBookingInfo = useStore((state) => state.addBookingInfo);
  const BookingInfo = useStore((state) => state.BookingInfo);

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [duration, setDuration] = useState(1);
  const [costTotal, setCostTotal] = useState(chooseParking.cost);

  const [bookStartDateTime, setBookStartDateTime] = useState(new Date());
  const [bookEndDateTime, setBookEndDateTime] = useState(new Date());




  // .............................................................

  const onButtonPress = () => {
    console.log(bookStartDateTime.toLocaleString());
    console.log(bookEndDateTime.toLocaleString());
    handleSliderChange(duration);
    if (new Date().getTime() > bookStartDateTime.getTime()) {
      Toast.show(
        "Please select the start time of your booking correctly.",
        Toast.CENTER
      );
    } else {
      addBookingInfo({
        startDate: bookStartDateTime.getTime(),
        endDate: bookEndDateTime.getTime(),
      });

      console.log(bookStartDateTime.toLocaleString());
      console.log(bookEndDateTime.toLocaleString());
      console.log(BookingInfo);

      const floors = getFloorsBYGateId(gateId);
      navigation.navigate(SCREENS.PICK_PARKING_SPOT_SCREEN, {floors});



      // navigation.navigate(SCREENS.PARKING_BOOKING_SUMMARY_SCREEN, {
      //   item,
      //   chosenGate,
      //   checkedSpot,
      //   checkedFloor,
      //   startTime,
      //   endTime,
      //   duration,
      //   date: selected,
      // });
    }

  };



  useEffect(() => {
    selectedTime.setUTCMinutes(0, 0, 0);
    selectedTime.setUTCSeconds(0, 0, 0);
    bookEndDateTime.setUTCMinutes(0, 0, 0);
    bookStartDateTime.setUTCMinutes(0, 0, 0);

    handleDatePickerConfirm(selectedDate);
    handleTimePickerConfirm(selectedTime);
    handleSliderChange(1);
  }, []);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };



  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };



  const handleDatePickerConfirm = (date) => {
    hideDatePicker();
    setBookStartDateTime(new Date(date.getTime()));
    setSelectedDate(date);
  };


  const handleTimePickerConfirm = (date) => {
    hideTimePicker();
    let startDateTimetemp = new Date(selectedDate.getTime());
    startDateTimetemp.setHours(date.getHours(), date.getMinutes(), 0, 0);
    setBookStartDateTime(new Date(startDateTimetemp.getTime()));
    setBookEndDateTime(new Date(startDateTimetemp.getTime() + duration * 60 * 60 * 1000));
    setSelectedTime(new Date(date.getTime()));
  };

  const handleSliderChange = (value) => {
    setDuration(value);
    let endDaeTimetemp = new Date(
      bookStartDateTime.getTime() + value * 60 * 60 * 1000
    );
    setBookEndDateTime(new Date(endDaeTimetemp.getTime()));
    setCostTotal(value * chooseParking.cost);

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
          navigation.goBack();
        }}
        containerStyle={styles.containerStyle}
      />

      <View style={styles.viewWrapper}>
        {/* start select date */}
        <View style={styles.wrapper}>
          <Text style={styles.titleText}>Booking Date</Text>
          <Pressable
            onPress={() => {
              showDatePicker();
            }}
          >
            <View style={styles.timeWrapper}>
              <Text style={styles.timeText}>
                {selectedDate.toLocaleString("en-GB", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </Text>
              <TimerSVG size={24} />
            </View>

            <DateTimePickerModal
              date={selectedDate}
              minimumDate={selectedDate}
              isVisible={datePickerVisible}
              mode="date"
              timeZoneName={"Asia/Riyadh"}
              onConfirm={handleDatePickerConfirm}
              onCancel={hideDatePicker}
            />
          </Pressable>
        </View>
        {/* End select date */}

        {/* select Time */}
        <View style={styles.wrapper}>
          <Text style={styles.titleText}>Booking Start Time</Text>
          <Pressable
            onPress={() => {
              showTimePicker();
            }}
          >
            <View style={styles.timeWrapper}>
              <Text style={styles.timeText}>
                {selectedTime.toLocaleTimeString("en", {
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                })}
              </Text>
              <TimerSVG size={24} />
            </View>

            <DateTimePickerModal
              date={selectedTime}
              isVisible={timePickerVisible}
              mode="time"
              display="spinner"
              is24Hour={false}
              minuteInterval={30}
              timeZoneName={"Asia/Riyadh"}
              onConfirm={handleTimePickerConfirm}
              onCancel={hideTimePicker}
            />
          </Pressable>

        </View>
        {/* End Select Time */}

        {/* Start Duration */}
        <View style={styles.wrapper}>
          <Text style={styles.titleText}>Booking Duration</Text>

          <Slider
            style={[styles.timeWrapper, { width: WIDTH * 0.9, height: 40 }]}
            minimumValue={0.5}
            maximumValue={24}
            step={0.5}
            value={duration}
            onValueChange={handleSliderChange}
            trackStyle={styles.track}
            thumbTintColor={COLORS.PRIMARY}
            minimumTrackTintColor={COLORS.PRIMARY}
            maximumTrackTintColor={COLORS.PRIMARY}
          />
        </View>
        {/* End Duration */}
      </View>

      {/* Start Total */}
      <View style={styles.viewWrapper}>
        <View style={styles.wrapper}>

          <Text style={[styles.titleText]}>
          Start Date {"     "}
            <Text style={[styles.cardColoredCostInfo]}>
              
              {bookStartDateTime.toLocaleTimeString("en-GB", {
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                  month: "numeric",
                  day: "numeric",
                  year: "numeric"
                }).replaceAll("/","-")}
            </Text>
            
          </Text>

          <Text style={[styles.titleText]}>
          End Date   {"     "}
            <Text style={[styles.cardColoredCostInfo]}>
              
              {bookEndDateTime.toLocaleTimeString("en-GB", {
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                  month: "numeric",
                  day: "numeric",
                  year: "numeric"
                }).replaceAll("/","-")}
            </Text>
            
          </Text>


          <Text style={[styles.titleText,{fontWeight:"bold"}]}>
            Cost Total   {"     "}
          
            <Text style={[styles.cardColoredCostInfo]}>
              
              {chooseParking.currency} {costTotal}
            </Text>{" "}
            / {duration} hours
          
          </Text>
          
  
        </View>
      </View>
      {/* End Total */}

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
