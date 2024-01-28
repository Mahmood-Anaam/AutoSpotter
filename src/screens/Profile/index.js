import React, { useRef } from "react";
import { ScrollView, View, Text, StatusBar, Image } from "react-native";
import styles from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
import AppBar from "../../components/AppBar";
import { ASSETS } from "../../utilities/assets";
import { SCREENS } from "../../utilities/constants";
import ProfileItem from "../../components/ProfileItem";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../utilities/colors";
import { getAuth } from "firebase/auth";
const ProfileScreen = ({ navigation }) => {
  const refRBSheet = useRef();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar />

      <AppBar title="Profile" rightIcon />

      <View style={styles.infoContainer}>
        <Image source={ASSETS.EllipseImg} width={140} height={140} />
        <Text style={styles.name}>Olivia Lucas</Text>
        <Text style={styles.email}>Olivia Lucas@yourdomain.com</Text>
      </View>

      <ProfileItem
        title="Edit Profile"
        leftIcon
        profile
        onPress={() => {
          navigation.navigate(SCREENS.PROFILE_EDIT_SCREEN);
        }}
      />

      <ProfileItem
        title="Payment"
        leftIcon
        payment
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="Notifications"
        leftIcon
        notification
        onPress={() => {
          navigation.navigate(SCREENS.NOTIFICATIONS_SCREEN);
        }}
      />

      <ProfileItem
        title="Security"
        leftIcon
        security
        onPress={() => {
          navigation.navigate(SCREENS.SECURITY_SCREEN);
        }}
      />

      <ProfileItem
        title="Help"
        leftIcon
        help
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="Dark Theme"
        rightIcon
        leftIcon
        switchMode
        darkMode
        onPress={() => {
          console.log("Pressed");
        }}
      />

      <ProfileItem
        title="Logout"
        leftIcon
        logout
        onPress={ async() => {
          await getAuth().signOut();
          refRBSheet.current.open();
        
        }
      }
      />

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
        <BMSHComponent
          onLogOutPress={async () => {
            refRBSheet.current.close();
            // await AsyncStorage.removeItem(USER_TOKEN);
            navigation.replace(SCREENS.AUTH_STACK);
          }}
          onCancelPress={() => {
            refRBSheet.current.close();
          }}
        />
      </RBSheet>
    </ScrollView>
  );
};

export default ProfileScreen;

export const BMSHComponent = (props) => {
  const { onLogOutPress, onCancelPress } = props;
  return (
    <View>
      <View style={styles.BMSHLogoutContainer}>
        <Text style={styles.BMSHLogoutText}>LOGOUT</Text>
      </View>

      <View style={styles.BMSHLogoutMsgContainer}>
        <Text style={styles.BMSHLogoutMsgText}>
          Are you sure you want to log out?
        </Text>
      </View>

      <AppButton
        title="Yes, Log me out"
        containerStyle={styles.BMSHLogMeOutBTN}
        onPress={onLogOutPress}
      />

      <AppButton
        title="Cancel"
        onPress={onCancelPress}
        GradientColors={COLORS.GRADIENT2}
        titleStyle={styles.BMSHTitleStyle}
      />
    </View>
  );
};
