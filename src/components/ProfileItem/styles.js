import { StyleSheet } from "react-native";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";
import { COLORS } from "../../utilities/colors";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: HSPACING.s20,
    marginBottom: VSPACING.s20,
  },
  itemTitle: {
    flex: 1,
    fontSize: normalizeFontSize(SPACING.s18),
    fontFamily: FONTS.MEDIUM,
  },
  logout: {
    color: COLORS.RED,
  },
});

export default styles;
