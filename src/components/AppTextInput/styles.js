import { StyleSheet } from "react-native";
import { SPACING } from "../../utilities/spacing";
import { normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";
import { COLORS } from "../../utilities/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.s20,
    paddingVertical: SPACING.s14,
    backgroundColor: "#FAFAFA",
    borderRadius: SPACING.s10,
    marginBottom: SPACING.s24,
  },
  input: {
    flex: 1,
    padding: 0,
    marginLeft: SPACING.s20,
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
    fontSize: normalizeFontSize(16),
  },
  filledArrow: {
    flexDirection: "row",
    gap: SPACING.s8,
    alignItems: "center",
  },
});

export default styles;
