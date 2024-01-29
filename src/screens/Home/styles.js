import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { FONTS } from "../../utilities/fonts";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE2,
  },
  parkingTitleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: VSPACING.s16,
    paddingHorizontal: SPACING.s16,
  },
  parkingTitle: {
    fontSize: normalizeFontSize(20),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.BLACK,
  },
  seeAllText: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.PRIMARY,
  },
  wideDivider: {
    height: 2,
    marginBottom: SPACING.s6,
    width: WIDTH * 0.35,
  },
  wideRatingContainer: {
    position: "absolute",
    top: SPACING.s10,
    left: SPACING.s16,
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s4,
    padding: SPACING.s6,
    backgroundColor: "#f6f6f6",
    borderRadius: SPACING.s6,
    elevation: 2,
  },
  wideHeartContainer: {
    position: "absolute",
    top: SPACING.s10,
    right: WIDTH * 0.45,
    backgroundColor: COLORS.WHITE,
    padding: SPACING.s8,
    borderRadius: SPACING.s20,
  },


  lottieStyle: {
    
    height: VSPACING.s60*5,
    alignSelf: "center",
  },


});

export default styles;
