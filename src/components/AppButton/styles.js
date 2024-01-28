import { StyleSheet } from "react-native";
import { SPACING, VSPACING } from "../../utilities/spacing";
import { COLORS } from "../../utilities/colors";
import { normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
  },
  text: {
    color: COLORS.WHITE,
    fontSize: normalizeFontSize(20),
    fontFamily: FONTS.SEMI_BOLD,
    textAlign: "center",
  },
  linearGradient: {
    paddingVertical: VSPACING.s14,
    borderRadius: SPACING.s10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.s12,
  },
});

export default styles;
