import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { HSPACING, VSPACING } from "../../utilities/spacing";
import { normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";
import { HEIGHT, WIDTH } from "../../utilities/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.5,
  },
  text: {
    fontSize: normalizeFontSize(30),
    fontFamily: FONTS.BOLD,
    color: COLORS.DARK_BLUE,
    marginHorizontal: HSPACING.s30,
  },
  title: {
    fontSize: normalizeFontSize(40),
    fontFamily: FONTS.BLACK,
    color: COLORS.PRIMARY,
    marginHorizontal: HSPACING.s30,
  },
  description: {
    fontSize: normalizeFontSize(18),
    marginHorizontal: HSPACING.s30,
    color: COLORS.DARK_BLUE,
    fontFamily: FONTS.REGULAR,
  },
  lottieStyle: {
    height: VSPACING.s40 * 3,
    alignSelf: "center",
  },
});

export default styles;
