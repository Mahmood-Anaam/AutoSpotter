import React from "react";
import { Card, Divider } from "react-native-paper";
import { COLORS } from "../../utilities/colors";
import styles from "./styles";
import { View, Text, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomePopularCard = (props) => {
  const {
    id,
    title,
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

        <View style={styles.cardTitleWrapper}>
          <Text style={styles.cardTitle}>{title}</Text>

          <View style={styles.cardDetailsContainer}>
            <MaterialCommunityIcons
              name="clock"
              size={24}
              color={COLORS.PRIMARY}
            />
            <Text style={styles.cardDetailsNumber}>{estimatedTime}</Text>
            <Text style={styles.cardDetailsText}>mins</Text>
          </View>
        </View>

        <View style={styles.cardTitleContainer}></View>

        <Divider style={styles.divider} />

        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsContainer}>
            <FontAwesome name="car" size={24} color={COLORS.PRIMARY} />
            <Text style={styles.cardDetailsNumber}>{availableSpots}</Text>
            <Text style={styles.cardDetailsText}>Spots</Text>
          </View>

          <Text style={styles.cardCost}>
            <Text style={styles.cardColoredCost}>
              {currency}
              {cost}
            </Text>
            /hr
          </Text>
        </View>
      </View>

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
    </Card>
  );
};

export default HomePopularCard;
