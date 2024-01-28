import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
import { HEIGHT, WIDTH } from "../../utilities/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE2,
    paddingHorizontal: HSPACING.s20,
    paddingTop: VSPACING.s20,
    paddingBottom: VSPACING.s12,
  },
  containerStyle: {
    marginBottom: VSPACING.s20,
  },
  floorContainer: {
    paddingVertical: VSPACING.s8,
    paddingHorizontal: HSPACING.s16,
    marginBottom: VSPACING.s20,
    marginHorizontal: HSPACING.s4,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s40,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
  },
  checkedFloorContainer: {
    backgroundColor: COLORS.PRIMARY,
  },
  floorText: {
    fontSize: SPACING.s14,
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.PRIMARY,
  },
  checkedFloorText: {
    color: COLORS.WHITE,
  },
  itemContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s22,
    padding: SPACING.s12,
    marginBottom: VSPACING.s20,
  },
  imageTitleContainer: {
    flexDirection: "row",
    paddingBottom: VSPACING.s10,
    marginBottom: VSPACING.s10,
    borderBottomWidth: 1,
    borderColor: COLORS.LIGHTER_GREY,
    alignItems: "center",
  },
  cancelledWrapper: {
    borderBottomWidth: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },
  titleContainer: {
    flex: 1,
    marginStart: HSPACING.s16,
  },
  image: {
    width: WIDTH * 0.2,
    height: WIDTH * 0.2,
    borderRadius: SPACING.s10,
  },
  title: {
    fontSize: SPACING.s16,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  address: {
    fontSize: SPACING.s14,
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.GREY,
  },
  costContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: VSPACING.s10,
  },
  cost: {
    color: COLORS.PRIMARY,
    paddingHorizontal: HSPACING.s8,
  },
  timer: {
    color: COLORS.GREY,
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SPACING.s14,
    marginEnd: HSPACING.s16,
  },
  statusContainer: {
    paddingVertical: SPACING.s6,
    paddingHorizontal: SPACING.s12,
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    borderRadius: SPACING.s10,
  },
  status: {
    fontSize: SPACING.s14,
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.WHITE,
  },
  paidContainer: {
    backgroundColor: COLORS.WHITE,
  },
  cancelledContainer: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.RED,
  },
  completedContainer: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GREEN,
  },
  paidText: {
    color: COLORS.PRIMARY,
  },
  cancelledText: {
    color: COLORS.RED,
  },
  completedText: {
    color: COLORS.GREEN,
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: HSPACING.s12,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: SPACING.s8,
    borderRadius: SPACING.s20,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
  },
  completedButtonContainer: {
    borderRadius: SPACING.s30,
  },
  button: {
    flex: 1,
    paddingVertical: SPACING.s6,
  },
  buttonText: {
    fontSize: SPACING.s16,
    fontFamily: FONTS.BOLD,
    color: COLORS.PRIMARY,
  },
});

export default styles;
