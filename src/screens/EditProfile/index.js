import { View, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../../repositorys/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { COLLECTIONS_REFS,SCREENS } from "../../utilities/constants";
import LottieView from "lottie-react-native";
import { ASSETS } from "../../utilities/assets";


const EditProfileScreen = ({ navigation }) => {
  const user = getAuth().currentUser;

  const [email, setEmail] = useState(user.email == null ? "" : user.email);
  const [fullName, setFullName] = useState(user.displayName == null ? "" : user.displayName);
  const [isUpdateing, setIsUpdateing] = useState(false);


  const onUpdateHandler = async () => {


    try {
      setIsUpdateing(true);
      await updateProfile(user, {
        displayName: fullName,
        email: email
      });


      await updateDoc(doc(db, COLLECTIONS_REFS.USERS, user.uid), {
        "fullName": fullName,
        "email": email,
      });

      setIsUpdateing(false);



    } catch (error) {
      setIsUpdateing(false);
      Toast.show(error.message,Toast.CENTER);
    }






  };



  return (
    <View style={styles.container}>
      <AppBar
        title="Edit Profile"
        leftIcon
        onLeftIconPress={() => {
          navigation.replace(SCREENS.PROFILE_SCREEN);
          
        }}
        containerStyle={styles.containerStyle}
      />

      {!isUpdateing && (

        <ScrollView showsVerticalScrollIndicator={false}>


          <Text style={styles.label}> Full Name :</Text>


          <AppTextInput
            placeholderTextColor="#212121"
            value={fullName}
            placeholder={"Full Name"}
            onChangeText={setFullName}
            containerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
          />



          <Text style={styles.label}> Email :</Text>
          <AppTextInput
            emailAddress
            placeholderTextColor="#212121"
            value={email}
            onChangeText={setEmail}
            placeholder={"exp@gmail.com"}
            containerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
          />


          <AppButton title="Update" onPress={onUpdateHandler} />

        </ScrollView>

      )}

      {isUpdateing && (
        <LottieView
          CENTER={true}
          source={ASSETS.loading}
          style={styles.lottieStyle}
          autoPlay
          loop
        />
      )}


    </View>
  );
};

export default EditProfileScreen;
