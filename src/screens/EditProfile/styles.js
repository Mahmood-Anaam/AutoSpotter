import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { FONTS } from "../../utilities/fonts";
import { SPACING, VSPACING } from "../../utilities/spacing";
import { normalizeFontSize } from "../../utilities/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SPACING.s24,
    paddingTop: SPACING.s24,
    paddingBottom: SPACING.s12,
  },
  containerStyle: {
    marginBottom: VSPACING.s20,
  },

  text: {
    color: COLORS.BLACK,
    fontSize: normalizeFontSize(20),
    fontFamily: FONTS.SEMI_BOLD,
  },

  label: {
    color: COLORS.BLACK,
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.SEMI_BOLD,
    marginVertical:VSPACING.s10,
  },
  inputContainerStyle: {
    paddingHorizontal: SPACING.s10,
  },
  inputStyle: {
    marginLeft: SPACING.s10,
  },

  lottieStyle: {
    height: VSPACING.s30*3,
    marginTop:"auto",
    marginBottom:"auto",
    alignSelf: "center",
  },

});

export default styles;
