import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";

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
  title: {
    fontSize: normalizeFontSize(20),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
    marginBottom: VSPACING.s16,
  },
  paymentTitle: {
    fontSize: normalizeFontSize(20),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
    marginBottom: VSPACING.s16,
    textAlignVertical: "center",
  },
  paymentItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s10,
    paddingHorizontal: HSPACING.s16,
    paddingVertical: HSPACING.s6,
    marginBottom: VSPACING.s16,
  },
  paymentItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: HSPACING.s20,
  },
  image: {
    width: WIDTH * 0.1,
    height: WIDTH * 0.1,
  },
  titleStyle: {
    color: COLORS.PRIMARY,
  },
  continueButton: {
    marginTop: HEIGHT * 0.15,
    marginBottom: VSPACING.s16,
  },
  textContainer: {
    paddingTop: VSPACING.s16,
  },
});

export default styles;
