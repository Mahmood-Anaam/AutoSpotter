import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { SPACING, HSPACING, VSPACING } from "../../utilities/spacing";
import { WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE2,
    paddingHorizontal: HSPACING.s24,
    paddingTop: VSPACING.s24,
    paddingBottom: VSPACING.s12,
  },
  containerStyle: {
    paddingBottom: VSPACING.s16,
  },
  gateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SPACING.s16,
    marginBottom: VSPACING.s16,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s16,
  },
  gateContainerChecked: {
    borderWidth: 3,
    borderColor: COLORS.PRIMARY,
  },
  image: {
    width: WIDTH * 0.2,
    height: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: normalizeFontSize(20),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
});

export default styles;
