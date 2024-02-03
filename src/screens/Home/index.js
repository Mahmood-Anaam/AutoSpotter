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
import {
  loadParking,
  loadGates,
  loadFloors,
} from "../../repositorys/firestoreRepository";
import Toast from "react-native-simple-toast";
import { useStore } from "../../store/store";
import { ASSETS } from "../../utilities/assets";
import LottieView from "lottie-react-native";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);

  const setParking = useStore((state) => state.setParking);
  const setGates = useStore((state) => state.setGates);
  const setFloors = useStore((state) => state.setFloors);
  useStore((state) => state.deleteBookingInfo)();

  const openModalHandler = () => {
    setIsModalVisible(true);
  };

  const closeModalHandler = () => {
    setIsModalVisible(false);
  };

  const onRefreshHandler = () => {
    setIsLoading(true);
    setIsFetching(!isFetching);
  };

  useEffect(() => {
    async function fetch() {
      await loadParking().then((respons) => {
        const { parking, error } = respons;
        if (error === "") {
          setParking(parking);
        } else {
          Toast.show(
            "Error getting parking data from firebase: (" + error + ")",
            Toast.CENTER
          );
        }
      });

      await loadGates().then((respons) => {
        const { gates, error } = respons;
        if (error === "") {
          setGates(gates);
        } else {
          Toast.show(
            "Error getting gates data from firebase: (" + error + ")",
            Toast.CENTER
          );
        }
      });

      await loadFloors().then((respons) => {
        const { floors, error } = respons;
        if (error === "") {
          setFloors(floors);
        } else {
          Toast.show(
            "Error getting floors data from firebase: (" + error + ")",
            Toast.CENTER
          );
        }
      });

      setIsLoading(false);
    }

    fetch();
  }, [isFetching]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.PRIMARY} />

      <HomeAppBar
        openSearchModal={openModalHandler}
        onRefresh={onRefreshHandler}
      />

      {!isLoading && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <HomeCategoryDivider title="Popular Parking" onPress={() => {}} />

          <HomePopularParking navigation={navigation} />

          <HomeCategoryDivider title="Nearby Parking" onPress={() => {}} />
          <HomeNearbyParkingList navigation={navigation} />
        </ScrollView>
      )}

      {isLoading && (
        <LottieView
          CENTER={true}
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
        <Text style={styles.seeAllText}> {"See All"}</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
