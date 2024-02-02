import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE2,
    paddingHorizontal: HSPACING.s20,
    paddingTop: VSPACING.s20,
    paddingBottom: VSPACING.s12,
    
  },
  containerStyle: {
    marginBottom: VSPACING.s20,
  },
  floorContainer: {
    paddingVertical: VSPACING.s8,
    paddingHorizontal: HSPACING.s20,
    marginBottom: VSPACING.s20,
    marginHorizontal: HSPACING.s4,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s40,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
  },
  checkedFloorContainer: {
    backgroundColor: COLORS.PRIMARY,
  },
  floorText: {
    fontSize: SPACING.s14,
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.PRIMARY,
  },
  checkedFloorText: {
    color: COLORS.WHITE,
  },
  checkedText: {
    color: COLORS.WHITE,
  },
  spotItemWrapper: {
    width: WIDTH * 0.2,
    height: HEIGHT * 0.06,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s10,
    borderWidth: 2,
    borderColor: COLORS.GREY,
  },
  image: {
    width: WIDTH * 0.15,
    height: HEIGHT * 0.04,
    margin: SPACING.s10,
    resizeMode: "contain",
  },
  spotRowWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s6,
    marginHorizontal: SPACING.s4,
    marginVertical: SPACING.s8,
  },
  mainWrapper: {
    paddingVertical: VSPACING.s10,
    paddingHorizontal: HSPACING.s18,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.PRIMARY,
  },
  checkedWrapper: {
    backgroundColor: COLORS.PRIMARY,
  },
  spotText: {
    fontSize: SPACING.s18,
    fontFamily: FONTS.BOLD,
    color: COLORS.PRIMARY,
  },
  availableContainer: {
    backgroundColor: "#f2f1ff",
  },
  allSpotsRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bookedWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s4,
  },
  bookedContainer: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: VSPACING.s12,
    paddingHorizontal: HSPACING.s10,
  },

  emptyListContainer: {
    height: HEIGHT * 0.2,
    width: WIDTH,
    alignItems: "center",
    justifyContent: "center",
    
  },

  emptyListText: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.PRIMARY,
    marginTop: "auto",
    marginBottom:"auto",
    textAlign: "center",

  
   
   
    

  
  },

  
  lottieStyle: {
    height: VSPACING.s30*3,
    marginTop:"auto",
    marginBottom:"auto",
    alignSelf: "center",
  },

  bookedText: {
    fontSize: SPACING.s16,
    fontFamily: FONTS.BOLD,
    color: COLORS.WHITE,
  },
  notAvailableContainer: {},
  continueBtn: {

    marginTop: "115%"
  },
});

export default styles;
