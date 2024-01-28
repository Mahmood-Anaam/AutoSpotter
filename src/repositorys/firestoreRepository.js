import Toast from "react-native-simple-toast";
import { db } from "./firebaseConfig";
import { collection, orderBy, query, getDocs } from "firebase/firestore";

import { useStore } from "../store/store";
import { COLLECTIONS_REFS } from "../utilities/constants";



export const getParking = async () => {

    const SavedParkingIDS = useStore((state) => state.SavedParkingIDS);
    try {

        const q = query(collection(db, COLLECTIONS_REFS.PARKING), orderBy('date', 'asc'));
        const querySnapshot = await getDocs(q);
        let parking = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
                saved: SavedParkingIDS.filter(element => element === doc.id).length > 0,
                currency: "SAR "
            };
        });

        return parking;

    } catch (error) {
        Toast.show("Error getting parking data from firebase: (" + error + ")", Toast.CENTER);
        return [];
    }



}



export const getGates = async () => {


    try {

        const q = query(collection(db, COLLECTIONS_REFS.GATES), orderBy('name', 'asc'));
        const querySnapshot = await getDocs(q);
        let gates = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
            };
        });

        return gates;

    } catch (error) {
        Toast.show("Error getting gates data from firebase: (" + error + ")", Toast.CENTER);
        return [];
    }



}




export const getFloors = async () => {


    try {

        const q = query(collection(db, COLLECTIONS_REFS.FLOORS), orderBy('name', 'asc'));
        const querySnapshot = await getDocs(q);
        let floors = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
            };
        });

        return floors;

    } catch (error) {
        Toast.show("Error getting floors data from firebase: (" + error + ")", Toast.CENTER);
        return [];
    }



}



export const getSpots = async () => {


    try {

        const q = query(collection(db, COLLECTIONS_REFS.SPOTS), orderBy('name', 'asc'));
        const querySnapshot = await getDocs(q);
        let spots = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
            };
        });

        return spots;

    } catch (error) {
        Toast.show("Error getting spots data from firebase: (" + error + ")", Toast.CENTER);
        return [];
    }



}




