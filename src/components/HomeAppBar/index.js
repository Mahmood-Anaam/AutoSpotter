import React from "react";
import { View, Text, Pressable } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FilledArrowDownSVG, GroupSVG } from "../SVG/SVG";
import { Badge } from "react-native-paper";
import { COLORS } from "../../utilities/colors";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeAppBar = (props) => {
  const { city, country, openSearchModal,onRefresh } = props;
  return (
    <View style={styles.appbarContainer}>
      <Text style={styles.locationText}>Location</Text>

      <View style={styles.locationWrapper}>
        <View style={styles.locationContainer}>
          <Entypo name="location-pin" color={COLORS.WHITE} size={24} />

          <Text style={[styles.locationText, styles.locationTextBold]}>
            {city || "Riyadh"}, {country || "SA"}
          </Text>

          <FilledArrowDownSVG color={COLORS.WHITE} size={18} />
        </View>

        <View style={styles.notificationContainer}>
          <Badge size={8} style={styles.badge}></Badge>
          <Ionicons name="notifications-sharp" color={COLORS.WHITE} size={24} />
        </View>
      </View>

      <Pressable onPress={openSearchModal} style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <AntDesign name="search1" color={COLORS.PRIMARY} size={20} />
          <Text style={styles.searchText}>Search</Text>
        </View>

        <Pressable
          onPress={onRefresh}
          style={styles.groupContainer}
        >
          <MaterialCommunityIcons
            name="refresh"
            size={25}
            color={COLORS.PRIMARY}
          />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default HomeAppBar;
