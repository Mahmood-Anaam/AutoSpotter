import React from "react";
import { Card, Divider } from "react-native-paper";
import { COLORS } from "../../utilities/colors";
import styles from "./styles";
import { View, Text, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeNearbyCard = (props) => {
  const {
    id,
    name,
    imageUrl,
    ToggleSaved,
    currency,
    cost,
    rating,
    estimatedTime,
    availableSpots,
    saved,
  } = props;

  return (
    <Card style={styles.card}>
      <View style={styles.cardContainer}>
        <Card.Cover source={{ uri: imageUrl }} style={styles.cardImage} />

        <Pressable
          onPress={() => ToggleSaved(saved, id)}
          style={styles.heartContainer}
        >
          <MaterialCommunityIcons
            name={saved ? "bookmark-minus" : "bookmark-minus-outline"}
            size={26}
            color={saved ? COLORS.PRIMARY : COLORS.GREY}
          />
        </Pressable>

        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={24} color={COLORS.GOLD} />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <View style={styles.cardDetailsWrapper}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {name}
          </Text>

          <View style={styles.cardDetails}>
            <View style={styles.cardDetailsContainer}>
              <MaterialCommunityIcons
                name="clock"
                size={24}
                color={COLORS.PRIMARY}
              />

              <View style={styles.cardDetailsNumberContainer}>
                <Text style={styles.cardDetailsNumber}>{estimatedTime}</Text>

                <Text style={styles.cardDetailsText}>mins</Text>
              </View>
            </View>

            <View style={styles.cardDetailsContainer}>
              <FontAwesome name="car" size={24} color={COLORS.PRIMARY} />

              <View style={styles.cardDetailsNumberContainer}>
                <Text style={styles.cardDetailsNumber}>{availableSpots}</Text>

                <Text style={styles.cardDetailsText}>Spots</Text>
              </View>
            </View>
          </View>

          <Divider style={styles.divider} />

          <Text style={styles.cardCost}>
            <Text style={styles.cardColoredCost}>
              {currency}
              {cost}
            </Text>
            /hr
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default HomeNearbyCard;
