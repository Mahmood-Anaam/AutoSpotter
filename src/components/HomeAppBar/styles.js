import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { COLORS } from "../../utilities/colors";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";

const styles = StyleSheet.create({
  appbarContainer: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    backgroundColor: COLORS.PRIMARY,
    borderBottomLeftRadius: SPACING.s26,
    borderBottomRightRadius: SPACING.s26,
    padding: SPACING.s16,
  },
  locationText: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLUE_WHITE,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s8,
  },
  locationTextBold: {
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.WHITE,
  },
  notificationContainer: {
    padding: SPACING.s12,
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: SPACING.s10,
  },
  badge: {
    position: "absolute",
    top: VSPACING.s10,
    right: HSPACING.s12,
  },
  searchWrapper: {
    marginTop: VSPACING.s30,
    flexDirection: "row",
    gap: SPACING.s8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s8,
    padding: SPACING.s12,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s10,
  },
  searchText: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.GREY,
  },
  groupContainer: {
    padding: SPACING.s12,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s10,
  },
});

export default styles;
