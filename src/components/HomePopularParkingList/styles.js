import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";
import { COLORS } from "../../utilities/colors";

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: "center",
  },
  emptyListContainer: {
    height: HEIGHT * 0.2,
    width: WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyListText: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.GREY,
  },

  


});

export default styles;
