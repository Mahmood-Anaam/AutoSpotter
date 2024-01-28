import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { HEIGHT, WIDTH } from "../../utilities/constants";
import { normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";
import { SPACING } from "../../utilities/spacing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SPACING.s24,
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  text: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLACK,
    textAlign: "center",
  },
  otpWrapper: {
    marginVertical: SPACING.s20 * 2,
  },
  pinCodeText: {
    color: COLORS.PRIMARY,
    fontSize: normalizeFontSize(28),
    fontFamily: FONTS.SEMI_BOLD,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: SPACING.s30,
  },
});

export default styles;
