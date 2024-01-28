import { StyleSheet } from "react-native";
import { SPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
import { COLORS } from "../../utilities/colors";
import { normalizeFontSize } from "../../utilities/responsive";

const styles = StyleSheet.create({
  upperView: {
    paddingBottom: SPACING.s52,
  },
  text: {
    fontSize: normalizeFontSize(40),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  coloredText: {
    color: COLORS.PRIMARY,
  },
});

export default styles;
