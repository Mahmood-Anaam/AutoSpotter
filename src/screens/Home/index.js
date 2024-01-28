import {
  View,
  Text,
  StatusBar,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./styles";
import { COLORS } from "../../utilities/colors";
import HomePopularParking from "../../components/HomePopularParkingList";
import HomeNearbyParkingList from "../../components/HomeNearbyParkingList";
import HomeAppBar from "../../components/HomeAppBar";
import HomeSearchModal from "../../components/HomeSearchModal";




const HomeScreen = ({ navigation }) => {


  
  const [modalVisible, setIsModalVisible] = React.useState(false);

  const openModalHandler = () => {
    setIsModalVisible(true);
  };

  const closeModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.PRIMARY} />

      <HomeAppBar openSearchModal={openModalHandler} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <HomeCategoryDivider title="Popular Parking"  onPress={() => {
          console.log("onPress See All Popular Parking");
        }} />

        <HomePopularParking navigation={navigation} />

        <HomeCategoryDivider
          title="Nearby Parking"
          onPress={() =>{ 
            console.log("onPress See All Nearby Parking");
          }}
        />

        <HomeNearbyParkingList navigation={navigation} />
      </ScrollView>

      {modalVisible && (
        <Modal animationType="fade" transparent={false} visible={modalVisible}>
          <HomeSearchModal
            closeModalHandler={closeModalHandler}
            navigation={navigation}
          />
        </Modal>
      )}
    </View>
  );
};

const HomeCategoryDivider = (props) => {
  const { title, onPress } = props;
  return (
    <View style={styles.parkingTitleView}>
      <Text style={styles.parkingTitle}>{title}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.seeAllText}> {"See All"}</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
