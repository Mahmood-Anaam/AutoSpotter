import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { SPACING, HSPACING, VSPACING } from "../../utilities/spacing";
import { WIDTH, normalizeFontSize,HEIGHT } from "../../utilities/responsive";
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

  emptyListContainer: {
    height: HEIGHT * 0.2,
    width: WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyListText: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.PRIMARY,
    marginBottom:"auto",
    marginTop:"auto",
    textAlign:"center"
  },



});

export default styles;
