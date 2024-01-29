
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "./styles";
import HomePopularCard from "../HomePopularCard";
import { SCREENS } from "../../utilities/constants";
import { useStore } from "../../store/store";


const HomePopularParking = ({ navigation }) => {


  const ParkingData = useStore((state) => state.Parking);
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
      data={ParkingData}
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
          name,
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
              navigation.push(SCREENS.CHOOSE_GATE_SCREEN, { gates });
            }}
          >
            <HomePopularCard
              id={id}
              name={name}
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
