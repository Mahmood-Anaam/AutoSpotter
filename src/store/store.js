import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";




export const useStore = create(
  persist(
    (set, get) => ({

      PopularParking: [],
      SavedParking: [],
      SavedParkingIDS: [],
      GatesParking:[],
      Floors: [],
      BookingInfo:{},
      FavoritesList: [],



      setPopularParking: (docs) => {
        return set({ PopularParking: docs });
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


            for (let i = 0; i < state.PopularParking.length; i++) {
              if (state.PopularParking[i].id == id) {
                state.PopularParking[i].saved = true;
                
                state.SavedParking = [...state.SavedParking, state.PopularParking[i]];
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

            for (let i = 0; i < state.PopularParking.length; i++) {
              if (state.PopularParking[i].id == id) {
                state.PopularParking[i].saved = false;
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
