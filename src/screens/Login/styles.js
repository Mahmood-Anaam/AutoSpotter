import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { SPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SPACING.s52 * 2,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SPACING.s24,
  },
  guestContainer: {
    marginTop: SPACING.s24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.s24,
    gap: SPACING.s8,
  },
  checkboxLabel: {
    color: COLORS.BLACK,
    fontSize: SPACING.s14,
    fontFamily: FONTS.MEDIUM,
  },
  forgotPasswordContainer: {
    marginTop: SPACING.s24,
    justifyContent: "center",
    alignItems: "center",
  },
  blueText: {
    color: COLORS.PRIMARY,
    fontSize: SPACING.s14,
    fontFamily: FONTS.SEMI_BOLD,
  },
  dontHaveAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.s24,
    gap: SPACING.s8,
  },
  dontHaveAccountText: {
    color: COLORS.GREY,
    fontSize: SPACING.s14,
    fontFamily: FONTS.SEMI_BOLD,
  },
  checkbox: {
    margin: SPACING.s8,
  },
});

export default styles;
