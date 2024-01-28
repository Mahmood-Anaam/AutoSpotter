import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { SPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
import { normalizeFontSize } from "../../utilities/responsive";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SPACING.s52 * 2,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SPACING.s24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.s24,
    gap: SPACING.s8,
  },
  checkboxLabel: {
    color: COLORS.BLACK,
    fontSize: normalizeFontSize(SPACING.s14),
    fontFamily: FONTS.MEDIUM,
  },
  blueText: {
    color: COLORS.PRIMARY,
    fontSize: normalizeFontSize(SPACING.s14),
    fontFamily: FONTS.SEMI_BOLD,
  },
  dontHaveAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SPACING.s24,
    gap: SPACING.s8,
  },
  dontHaveAccountText: {
    color: COLORS.GREY,
    fontSize: normalizeFontSize(SPACING.s14),
    fontFamily: FONTS.SEMI_BOLD,
  },
});

export default styles;
