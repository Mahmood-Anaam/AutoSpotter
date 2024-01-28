import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import React from "react";
import styles from "./styles";
import { useStore } from "../../store/store";
import AppBar from "../../components/AppBar";
import { Searchbar } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../utilities/colors";
import LottieView from "lottie-react-native";
import { ASSETS } from "../../utilities/assets";
import AppButton from "../../components/AppButton";

const SavedScreen = () => {
  const refRBSheet = React.useRef();
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const SavedParking = useStore((state) => state.SavedParking);
  const addToSavedParkingIDS = useStore((state) => state.addToSavedParkingIDS);
  const deleteFromSavedParkingIDS = useStore((state) => state.deleteFromSavedParkingIDS);

  const ToggleSaved = (saved, id) => {
    saved ? deleteFromSavedParkingIDS(id) : addToSavedParkingIDS(id);
  };






  const handleItemPress = (item) => {
    setSelectedItem(item);
    refRBSheet.current.open();
  };

  const unBookmarkAndClose = (saved, id) => {
    ToggleSaved(saved, id);
    refRBSheet.current.close();
  };

  const filteredList = SavedParking.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar />

      <AppBar title="My Bookmarks" rightIcon />

      {SavedParking.length === 0 ? (
        <View style={styles.noBookmarksContainer}>
          <LottieView
            source={ASSETS.noBookmarks}
            style={styles.lottieStyle}
            autoPlay
            loop
          />
          <Text style={styles.noBookmarksText}>
            No bookmarks available now!!{"\n"}Go and add some
          </Text>
        </View>
      ) : (
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchbar}
          />

          <FlatList
            data={searchQuery ? filteredList : SavedParking}
            scrollEnabled={false}
            nestedScrollEnabled={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const { id, title, address, imageUrl, saved, type } = item;
              return (
                <View style={styles.cardContainer}>
                  <Image source={{ uri: imageUrl }} style={styles.image} />
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.address}>{address}</Text>
                  </View>
                  <Pressable onPress={() => handleItemPress(item)}>
                    <MaterialCommunityIcons
                      name={saved ? "bookmark-minus" : "bookmark-minus-outline"}
                      size={26}
                      color={saved ? COLORS.PRIMARY : COLORS.GREY}
                    />
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
      )}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: styles.BMSHWrapper,
          draggableIcon: styles.BMSHDraggableIcon,
          container: styles.BMSHContainer,
        }}
      >
        {selectedItem && (
          <View>
            <View style={styles.BMSHheaderContainer}>
              <Text style={styles.BMSHheaderText}>Remove from Bookmarks?</Text>
            </View>

            <View style={styles.cardContainer}>
              <Image
                source={{ uri: selectedItem.imageUrl }}
                style={styles.image}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{selectedItem.title}</Text>
                <Text style={styles.address}>{selectedItem.address}</Text>
              </View>

              <MaterialCommunityIcons
                name={
                  selectedItem.saved
                    ? "bookmark-minus"
                    : "bookmark-minus-outline"
                }
                size={26}
                color={selectedItem.saved ? COLORS.PRIMARY : COLORS.GREY}
              />
            </View>

            <View style={styles.BMSHButtonContainer}>
              <AppButton
                title="Cancel"
                GradientColors={COLORS.GRADIENT2}
                containerStyle={styles.BMSHButtonStyle}
                titleStyle={styles.BMSHButtonTitleStyle}
                onPress={() => refRBSheet.current.close()}
              />
              <AppButton
                title="Yes, Remove"
                containerStyle={styles.BMSHButtonStyle}
                onPress={() =>
                  unBookmarkAndClose(
                    selectedItem.saved,
                    selectedItem.id
                  )
                }
              />
            </View>
          </View>
        )}
      </RBSheet>
    </ScrollView>
  );
};

export default SavedScreen;
