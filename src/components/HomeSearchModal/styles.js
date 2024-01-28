import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { SPACING } from "../../utilities/spacing";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    padding: SPACING.s20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8F7FD",
    width: WIDTH * 0.9,
    height: HEIGHT * 0.06,
    borderRadius: SPACING.s8,
    paddingHorizontal: SPACING.s12,
    gap: SPACING.s12,
    marginBottom: SPACING.s16,
  },
  input: {
    flex: 1,
    padding: SPACING.s8,
    fontSize: normalizeFontSize(18),
  },
  parkingItem: {
    width: WIDTH * 0.9,
    paddingVertical: SPACING.s12,
    flexDirection: "row",
    alignItems: "center",
  },
  parkingInfo: {
    flex: 1,
    marginHorizontal: SPACING.s16,
  },
  parkingDistance: {},
  parkingName: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.BLACK,
  },
  parkingAddress: {
    fontSize: normalizeFontSize(12),
    fontFamily: FONTS.BOLD,
    color: COLORS.GREY,
  },
  parkingCost: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.PRIMARY,
  },
});

export default styles;
