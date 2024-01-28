import { LogBox } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { useFonts } from "expo-font";
import { loadedFonts } from "./src/utilities/fonts";
import "./src/repositorys/firebaseConfig";


LogBox.ignoreAllLogs(true);

export default function App() {
  const [fontsLoaded] = useFonts(loadedFonts);
  if (!fontsLoaded) return null;
  return <NavigationContainer>{<AppNavigator />}</NavigationContainer>;
}