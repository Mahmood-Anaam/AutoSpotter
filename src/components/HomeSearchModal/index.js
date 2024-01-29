import React, { useRef, useState } from "react";
import {
  Text,
  Pressable,
  View,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { filter } from "lodash";
import styles from "./styles";
import { COLORS } from "../../utilities/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { ParkingSVG } from "../SVG/SVG";
import { SCREENS } from "../../utilities/constants";
import { useStore } from "../../store/store";

const HomeSearchModal = (props) => {
  const { closeModalHandler, navigation } = props;
  const parkingData = useStore((state) => state.Parking);
  const [data, setData] = useState(parkingData);
  const textInput = useRef(0);



  const contains = ({ name }, query) => {
    if (name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
    return false;
  };

  const handleSearch = (text) => {
    const searchData = filter(parkingData, (userSearch) => {
      return contains(userSearch, text);
    });

    setData([...searchData]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <AntDesign
          name="search1"
          color={COLORS.PRIMARY}
          size={24}
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          placeholder="Search for Parking..."
          placeholderTextColor={COLORS.GREY}
          autoFocus={true}
          ref={textInput}
          cursorColor={COLORS.PRIMARY}
          onChangeText={handleSearch}
        />

        <Pressable
          onPress={() => {
            textInput.current.clear();
            closeModalHandler();
          }}
        >
          <Entypo name="circle-with-cross" color={COLORS.PRIMARY} size={24} />
        </Pressable>
      </View>

      <FlatList
        data={data}
        scrollEnabled={false}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const { name, address, cost, currency, estimatedTime } = item;
          return (
            <Pressable
              style={styles.parkingItem}
              onPress={() => {
                closeModalHandler();
                navigation.push(SCREENS.CHOOSE_GATE_SCREEN, { item });
              }}
            >
              <ParkingSVG />

              <View style={styles.parkingInfo}>
                <Text style={styles.parkingName}>{name}</Text>
                <Text style={styles.parkingAddress}>{address}</Text>
              </View>

              <View style={styles.parkingDistance}>
                <Text style={styles.parkingName}>{estimatedTime}min</Text>
                <Text style={styles.parkingCost}>
                  {currency}{cost} <Text style={styles.parkingAddress}>/hour</Text>
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </ScrollView>
  );
};

export default HomeSearchModal;
