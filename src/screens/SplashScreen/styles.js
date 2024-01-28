import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { normalizeFontSize } from "../../utilities/responsive";
import { VSPACING } from "../../utilities/spacing";
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
    color: COLORS.PRIMARY,
    textAlign: "center",
  },
  lottieStyle: {
    height: VSPACING.s40 * 2,
    alignSelf: "center",
  },
});

export default styles;
