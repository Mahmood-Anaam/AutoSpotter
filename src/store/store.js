import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const useStore = create(
  persist(
    (set, get) => ({

      Parking: [],
      SavedParking: [],
      SavedParkingIDS: [],
      GatesParking:[],
      Floors: [],
      BookingInfo:{},
      FavoritesList: [],



      setParking: (docs) => {
        const data = docs.map((doc)=>{
          return {
            ...doc,
            saved:  get().SavedParkingIDS.filter(element => element === doc.id).length > 0,
            currency: "SAR "
          }
        });
        
        return set({ Parking: data });
      },


      setSavedParking: (docs) => {
        return set({ SavedParking: docs });
      },

      
      setGatesParking: (docs) => {
        return set({ GatesParking: docs });
      },


      getGatesByParkingId:(parkingId)=>{
        const gates = get().GatesParking.filter((gate) => gate.parkingId === parkingId);
        return gates;

      },


      setFloors: (docs) => {
        return set({ Floors: docs });
      },

      getFloorsBYGateId:(gateId)=>{
        const floors = get().Floors.filter((floor) => floor.gateId === gateId);
        return floors;
      },


      addBookingInfo: (info) => {
        return set({ BookingInfo: {...get().BookingInfo,...info}});
      },

      deleteBookingInfo: () => {
        return set({ BookingInfo: {} });
      },




      addToSavedParkingIDS: (id) => {

        return set(
          produce((state) => {


            for (let i = 0; i < state.Parking.length; i++) {
              if (state.Parking[i].id == id) {
                state.Parking[i].saved = true;
                
                state.SavedParking = [...state.SavedParking, state.Parking[i]];
                state.SavedParkingIDS = [...state.SavedParkingIDS, id];
                break;
              }
            }
            

          }))
      },




      deleteFromSavedParkingIDS: (id) => {

        return set(
          produce((state) => {
            let index = state.SavedParkingIDS.findIndex((elm) => elm === id);
            state.SavedParkingIDS.splice(index, 1);
            state.SavedParking.splice(index, 1);

            for (let i = 0; i < state.Parking.length; i++) {
              if (state.Parking[i].id == id) {
                state.Parking[i].saved = false;
                break;
              }
            }

          }
          ))
      },


    }),
    {
      name: "parking-app",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
