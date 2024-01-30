
import { db } from "./firebaseConfig";
import { collection, orderBy, query, getDocs } from "firebase/firestore";
import { COLLECTIONS_REFS } from "../utilities/constants";



export const loadParking = async () => {

    let parking = [];
    let error = "";

    try {
        const q = query(collection(db, COLLECTIONS_REFS.PARKING), orderBy('date', 'asc'));
        const querySnapshot = await getDocs(q);
        parking = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
            };
        });

        return { parking, error };

    } catch (e) {
        error = e;
        return { parking, error };
    }



}



export const loadGates = async () => {
    let gates = [];
    let error = "";

    try {

        const q = query(collection(db, COLLECTIONS_REFS.GATES), orderBy('name', 'asc'));
        const querySnapshot = await getDocs(q);
        gates = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
            };
        });

        return { gates, error };

    } catch (e) {
        error = e;
        return { gates, error };
    }



}




export const loadFloors = async () => {

    let floors = [];
    let error = "";
    try {

        const q = query(collection(db, COLLECTIONS_REFS.FLOORS), orderBy('name', 'asc'));
        const querySnapshot = await getDocs(q);
        floors = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
            };
        });

        return { floors, error };

    } catch (e) {
        error = e;
        return { floors, error };
    }



}



export const loadSpots = async () => {

    let spots = [];
    let error = "";
    try {

        const q = query(collection(db, COLLECTIONS_REFS.SPOTS), orderBy('name', 'asc'));
        const querySnapshot = await getDocs(q);
        spots = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id,
            };
        });

        return { spots, error };

    } catch (e) {
        error = e;
        return { spots, error };
    }



}




