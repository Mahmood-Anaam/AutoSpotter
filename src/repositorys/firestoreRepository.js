
import { db } from "./firebaseConfig";
import { collection, orderBy, query, getDocs } from "firebase/firestore";
import { COLLECTIONS_REFS } from "../utilities/constants";



export const loadParking = async () => {

    let parking=[];
    let error = "";

    try {
        console.log("Start getting parking data from firebase");
        const q = query(collection(db, COLLECTIONS_REFS.PARKING), orderBy('date', 'asc'));
        const querySnapshot = await getDocs(q);
        parking = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
            };
        });

        return {parking,error};

    } catch (e) {
        error = e;
        console.log("Error getting parking data from firebasexxxx: ("+error+")");
        return {parking,error};
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
        console.log("Error getting gates data from firebase: (" + error + ")");
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
        console.log("Error getting floors data from firebase: (" + error + ")");
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
        console.log("Error getting spots data from firebase: (" + error + ")");
        return [];
    }



}




