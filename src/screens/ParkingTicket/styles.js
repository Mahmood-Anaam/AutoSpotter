import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE2,
    paddingHorizontal: HSPACING.s20,
    paddingTop: VSPACING.s20,
    paddingBottom: VSPACING.s12,
  },
  containerStyle: {
    marginBottom: VSPACING.s12,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: WIDTH * 0.01,
    marginBottom: HEIGHT * 0.06,
    borderRadius: SPACING.s22,
    backgroundColor: COLORS.WHITE,
    padding: SPACING.s22,
  },
  text: {
    color: COLORS.BLACK,
    fontSize: normalizeFontSize(14),
    fontFamily: FONTS.SEMI_BOLD,
    textAlign: "center",
    marginBottom: VSPACING.s10,
  },
  infoWrapper: {
    flexDirection: "row",
  },
  infoContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  infoTitle: {
    fontSize: normalizeFontSize(14),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.GREY,
    marginTop: VSPACING.s10,
  },
  infoValue: {
    fontSize: normalizeFontSize(12),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  flatListContainer: {
    marginTop: VSPACING.s10,
    width: WIDTH * 0.75,
    marginLeft: WIDTH * 0.05,
  },
});

export default styles;
