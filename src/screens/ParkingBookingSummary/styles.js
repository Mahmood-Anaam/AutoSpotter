import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { HEIGHT, WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";

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
  flatListContainer: {
    padding: SPACING.s4,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s10,
    marginBottom: VSPACING.s4,
  },
  cardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: VSPACING.s16,
    paddingHorizontal: HSPACING.s6,
  },
  cardItemTitle: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.GREY,
  },
  cardItemValue: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: HSPACING.s10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SPACING.s16,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s10,
  },
  changeText: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.BOLD,
    color: COLORS.PRIMARY,
  },
  cardText: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.BLACK,
  },
  buttonContainer: {
    marginTop: HEIGHT*0.08,
  },
  modalContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContentStyle: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.6,
    justifyContent: "center",
    alignItems: "center",
    gap: VSPACING.s12,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: HSPACING.s32,
    borderRadius: 6,
  },
  modalText: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.BLACK,
    textAlign: "center",
  },
  btnTitleStyle: {
    color: COLORS.PRIMARY,
  },
});

export default styles;
