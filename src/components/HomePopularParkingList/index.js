
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "./styles";
import HomePopularCard from "../HomePopularCard";
import { SCREENS } from "../../utilities/constants";
import { useStore } from "../../store/store";


const HomePopularParking = ({ navigation }) => {


  const PopularParkingData = useStore((state) => state.PopularParking);
  const addToSavedParkingIDS = useStore((state) => state.addToSavedParkingIDS);
  const deleteFromSavedParkingIDS = useStore((state) => state.deleteFromSavedParkingIDS);
  const getGatesByParkingId = useStore((state) => state.getGatesByParkingId);

  const ToggleSaved = (saved, id) => {
    saved ? deleteFromSavedParkingIDS(id) : addToSavedParkingIDS(id);
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={PopularParkingData}
      contentContainerStyle={styles.flatListContainer}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>No Parking Places Available</Text>
        </View>
      }
      renderItem={({ item }) => {
        const {
          id,
          title,
          imageUrl,
          currency,
          cost,
          rating,
          estimatedTime,
          availableSpots,
          saved,
        } = item;
        return (
          <Pressable
            onPress={() => {
              const gates = getGatesByParkingId(id);
              navigation.push(SCREENS.CHOOSE_GATE_SCREEN, {gates});
            }}
          >
            <HomePopularCard
              id={id}
              title={title}
              imageUrl={imageUrl}
              currency={currency}
              cost={cost}
              rating={rating}
              estimatedTime={estimatedTime}
              availableSpots={availableSpots}
              saved={saved}
              ToggleSaved={() => ToggleSaved(saved, id)}
            />
          </Pressable>
        );
      }}
    />
  );
};

export default HomePopularParking;
