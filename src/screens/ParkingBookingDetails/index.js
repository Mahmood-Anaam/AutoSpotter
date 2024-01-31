import React, { useState, useEffect } from "react";
import { ScrollView, Text, TextInput, View, Pressable } from "react-native";
import styles from "./styles";
import { getCurrentTime, formatDate, formatTime, logger } from "../../utilities/HelperFunctions";
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
import DateTimePickerModal from 'react-native-modal-datetime-picker';




const ParkingBookingDetailsScreen = (props) => {

  const { parkingId, gateId } = props.route.params;
  const navigation = useNavigation();
  const chooseParking = useStore((state) => state.getParkingBYId)(parkingId);
  const setBookingInfo = useStore((state) => state.setBookingInfo);

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [duration, setDuration] = useState(1);
  const [costTotal, setCostTotal] = useState(chooseParking.cost);

  const [bookStartDateTime, setBookStartDateTime] = useState(null);
  const [bookEndDateTime, setBookEndDateTime] = useState(null);


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
    setCostTotal(value * chooseParking.cost);
    setDuration(value);
  };



  const onButtonPress = () => {
     let startDaeTimetemp = selectedDate;
     startDaeTimetemp.setHours(selectedTime.getHours(),selectedTime.getMinutes(),0,0);
    setBookStartDateTime(startDaeTimetemp);
    
    startDaeTimetemp.setHours(startDaeTimetemp.getHours()+5)
    setBookEndDateTime(startDaeTimetemp);


    console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyy")
    console.log(startDaeTimetemp)
    console.log(bookStartDateTime)
    console.log(bookEndDateTime)


  };





  const onButtonPress2 = () => {
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
  };



  useEffect(() => {
    // let temp = new Date(Date.now());
    // temp.setMinutes(temp.getMinutes() + 30);
    // setSelectedDate(temp);
    // setSelectedTime(temp);



  }, []);




  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDatePickerConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date);
    console.log("DatePickerConfirm: ")
    console.log(date);
  };



  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimePickerConfirm = (date) => {
    hideTimePicker();
    setSelectedTime(date);
    console.log("handleTimePickerConfirm: ")
    console.log(date);
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
                {
                  selectedDate.toLocaleString(
                    "en-GB",
                    {

                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })
                }</Text>
              <TimerSVG size={24} />
            </View>

            <DateTimePickerModal
              date={selectedDate}
              minimumDate={selectedDate}
              isVisible={datePickerVisible}
              mode="date"
              timeZoneName={'Asia/Riyadh'}
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
              <Text style={styles.timeText}>{selectedTime.toLocaleTimeString("en", { hour12: true, hour: "numeric", minute: "numeric" })}</Text>
              <TimerSVG size={24} />
            </View>

            <DateTimePickerModal
              date={selectedTime}
              isVisible={timePickerVisible}
              mode="time"
              display="spinner"
              is24Hour={false}
              minuteInterval={30}
              timeZoneName={'Asia/Riyadh'}
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
          <Text style={styles.titleText}>Cost Total</Text>
          <Text style={[styles.cardCost]}>
            <Text style={[styles.cardColoredCost]}>{chooseParking.currency} {costTotal}</Text> / {duration} hours
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