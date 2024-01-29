import {
  View,
  Text,
  StatusBar,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { React, useState, useEffect } from "react";
import styles from "./styles";
import { COLORS } from "../../utilities/colors";
import HomePopularParking from "../../components/HomePopularParkingList";
import HomeNearbyParkingList from "../../components/HomeNearbyParkingList";
import HomeAppBar from "../../components/HomeAppBar";
import HomeSearchModal from "../../components/HomeSearchModal";
import { loadParking } from "../../repositorys/firestoreRepository";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Toast from "react-native-simple-toast";
import { useStore } from "../../store/store";
import { ASSETS } from "../../utilities/assets";
import LottieView from "lottie-react-native";

const HomeScreen = ({ navigation }) => {


  const [modalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const setParking = useStore((state) => state.setParking);

  const openModalHandler = () => {
    setIsModalVisible(true);
  };

  const closeModalHandler = () => {
    setIsModalVisible(false);
  };


  useEffect(() => {

    loadParking().then(respons => {
      const { parking, error } = respons;
      if (error === "") {
        setParking(parking);
        console.log("sucess getting parking data from firebase:")
      } else {
        console.log("Error getting parking data from firebase: (" + error + ")")
        Toast.show("Error getting parking data from firebase: (" + error + ")", Toast.CENTER);

      }
    });

    setIsLoading(false);

  }, [isLoading]);


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.PRIMARY} />

      <HomeAppBar openSearchModal={openModalHandler} />


      {!isLoading && (

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <HomeCategoryDivider title="Popular Parking" onPress={() => {
            setIsLoading(true);
            console.log("onPress See All Popular Parking");
          }} />

          <HomePopularParking navigation={navigation} />
          <HomeCategoryDivider
            title="Nearby Parking"
            onPress={() => {
              setIsLoading(true);
              console.log("onPress See All Nearby Parking");
            }}
          />
          <HomeNearbyParkingList navigation={navigation} />

        </ScrollView>

      )}

      {isLoading && (
        <LottieView
          source={ASSETS.loading}
          style={styles.lottieStyle}
          autoPlay
          loop
        />
      )}

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
        <MaterialCommunityIcons
          name="refresh"
          size={25}
          color={COLORS.PRIMARY}
        />

      </Pressable>
    </View>
  );
};

export default HomeScreen;
