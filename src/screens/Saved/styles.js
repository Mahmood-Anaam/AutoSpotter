import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { FONTS } from "../../utilities/fonts";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE2,
    padding: SPACING.s24,
  },
  searchbar: {
    marginVertical: VSPACING.s24,
  },
  noBookmarksContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noBookmarksText: {
    fontSize: normalizeFontSize(20),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
    textAlign: "center",
  },
  lottieStyle: {
    height: VSPACING.s40 * 4,
    alignSelf: "center",
  },
  cardContainer: {
    marginBottom: VSPACING.s24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: SPACING.s10,
    padding: SPACING.s8,
    backgroundColor: COLORS.WHITE,
    elevation: 2,
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: SPACING.s12,
  },
  title: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  address: {
    fontSize: normalizeFontSize(14),
    fontFamily: FONTS.BOLD,
    color: COLORS.GREY,
  },
  image: {
    width: WIDTH * 0.2,
    height: HEIGHT * 0.08,
    borderRadius: SPACING.s2,
  },
  BMSHWrapper: {
    backgroundColor: "#171728C4",
  },
  BMSHDraggableIcon: {
    backgroundColor: COLORS.GREY,
    width: SPACING.s40 * 2,
    height: SPACING.s6,
  },
  BMSHContainer: {
    borderTopLeftRadius: SPACING.s20,
    borderTopRightRadius: SPACING.s20,
    elevation: 3,
    paddingHorizontal: HSPACING.s24,
  },
  BMSHheaderContainer: {
    alignItems: "center",
    paddingVertical: VSPACING.s8,
    borderBottomWidth: 2,
    marginBottom: VSPACING.s16,
  },
  BMSHheaderText: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  BMSHButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: HSPACING.s12,
  },
  BMSHButtonStyle: {
    flex: 1,
  },
  BMSHButtonTitleStyle: {
    color: COLORS.PRIMARY,
  },
});

export default styles;
