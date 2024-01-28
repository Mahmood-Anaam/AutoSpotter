import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: HSPACING.s20,
    paddingTop: VSPACING.s20,
    paddingBottom: VSPACING.s12,
  },
  contentContainer: {
    marginBottom: VSPACING.s12,
  },
  containerStyle: {
    marginBottom: VSPACING.s20,
  },
  titleText: {
    fontSize: normalizeFontSize(20),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
  },
  calendar: {
    padding: SPACING.s12,
    marginVertical: VSPACING.s16,
    backgroundColor: COLORS.LIGHT_BLUE_WHITE,
    borderRadius: SPACING.s10,
  },
  viewWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: VSPACING.s16,
  },
  wrapper: {
    flex: 1,
    gap: SPACING.s12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: VSPACING.s12,
    marginHorizontal: HSPACING.s12,
  },
  arrowContainer: {
    alignSelf: "flex-end",
    marginHorizontal: HSPACING.s20,
    marginBottom: HEIGHT * 0.018,
  },
  timeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: HSPACING.s16,
    paddingVertical: VSPACING.s16,
    backgroundColor: COLORS.LIGHT_BLUE_WHITE,
    borderRadius: SPACING.s10,
  },
  timeText: {
    fontSize: SPACING.s16,
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLACK,
  },
  cardCost: {
    fontSize: normalizeFontSize(14),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.GREY,
  },
  cardColoredCost: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.BOLD,
    color: COLORS.PRIMARY,
  },
  btn: {
    marginBottom: VSPACING.s20,
  },
  buttonContainer: {
    marginVertical: VSPACING.s12,
  },
});

export default styles;
