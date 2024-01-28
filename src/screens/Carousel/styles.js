import { StyleSheet } from "react-native";
import { WIDTH } from "../../utilities/constants";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";
import { COLORS } from "../../utilities/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    padding: SPACING.s16,
    paddingTop: VSPACING.s20 * 5,
  },
  image: {
    width: WIDTH - 80,
    height: 400,
  },
  title: {
    fontSize: normalizeFontSize(32),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
    textAlign: "center",
  },
  title2: {
    color: COLORS.PRIMARY,
  },
  description: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.REGULAR,
    color: COLORS.LIGHT_GREY,
    textAlign: "center",
    letterSpacing: 0.2,
    paddingTop: VSPACING.s6,
  },
  activeDotStyle: {
    backgroundColor: COLORS.PRIMARY,
    width: HSPACING.s32,
  },
  buttonLabelContainer: {
    padding: SPACING.s12,
  },
  buttonLabel: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.PRIMARY,
  },
});

export default styles;
