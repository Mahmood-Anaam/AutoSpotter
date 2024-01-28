import { Dimensions } from "react-native";
import { ASSETS } from "./assets";

const { width, height } = Dimensions.get("window");
export const WIDTH = width;
export const HEIGHT = height;

export const SCREENS = {
  SPLASH_SCREEN: "SplashScreen",
  BOTTOM_NAVIGATOR: "BottomNavigator",
  AUTH_STACK: "AuthStack",
  ONBOARDING_SCREEN: "OnboardingScreen",
  CAROUSEL_SCREEN: "CarouselScreen",
  LOGIN_SCREEN: "LoginScreen",
  SIGNUP_SCREEN: "SignupScreen",
  OTP_CODE_SCREEN: "OtpCodeScreen",
  SAVED_SCREEN: "SavedScreen",
  BOOKING_SCREEN: "BookingScreen",

  //Home Stack
  HOME_SCREEN: "HomeScreen",
  CHOOSE_GATE_SCREEN: "ChooseGateScreen",
  PICK_PARKING_SPOT_SCREEN: "PickParkingSpotScreen",
  PARKING_BOOKING_DETAIL_SCREEN: "ParkingBookingDetailScreen",
  PARKING_BOOKING_SUMMARY_SCREEN: "ParkingBookingSummaryScreen",
  CHANGE_PAYMENT_METHOD_SCREEN: "ChangePaymentMethodScreen",
  PARKING_TICKET_SCREEN: "ParkingTicketScreen",
  ADD_NEW_Card_SCREEN: "AddNewCardScreen",

  //Profile Stack
  PROFILE_SCREEN: "ProfileScreen",
  PROFILE_EDIT_SCREEN: "ProfileEditScreen",
  NOTIFICATIONS_SCREEN: "NotificationsScreen",
  SECURITY_SCREEN: "SecurityScreen",

  //Bottom Navigation Stacks
  HOME_STACK: "Home",
  PROFILE_STACK: "Profile",
  BOOKING_STACK: "Bookings",
  SAVED_STACK: "Saved",
};

export const USER_TOKEN = "AUTO_SPOTTER_USER_TOKEN";
export const FIRST_LAUNCH = "AUTO_SPOTTER_FIRST_LAUNCH";

// Slides Data
export const SLIDES = [
  {
    id: 1,
    title1: "Find Parking",
    title2: " Places\n",
    title3: "Around You Easily",
    description:
      "Ditch the hunt! Spot open spaces nearby, book 'em in a tap, and finally breathe easy. Parking made simple.",
    image: ASSETS.carouselImg1,
  },
  {
    id: 2,
    title1: "Book and Pay",
    title2: " Parking\n",
    title3: "Quickly & Safely",
    description:
      "Skip the meter mayhem. Secure your spot, pay with a click, and enjoy guilt-free parking. No sweat, just street.",
    image: ASSETS.carouselImg2,
  },
  {
    id: 3,
    title1: "Extend",
    title2: " Parking ",
    title3: "Time\nAs You Need It",
    description:
      "Running late? No stress. Extend your time in a flash and keep the good vibes rolling. Parking flex on point.",
    image: ASSETS.carouselImg3,
  },
];







// Cloud Firestore Collections 
export const COLLECTIONS_REFS = {
  PARKING: "POPULAR_PARKING",
  GATES: "GATES",
  FLOORS: "FLOORS",
  SPOTS: "SPOTS"

};
