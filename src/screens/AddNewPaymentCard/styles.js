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
  cardImg: {
    height: HEIGHT * 0.3,
    width: WIDTH * 0.9,
  },
  cardImgContainer: {
    padding: SPACING.s24,
  },
  debitTextWrapper: {
    alignSelf: "flex-end",
  },
  cardNumberWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: HEIGHT * 0.1,
  },
  cardText: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.WHITE,
  },
  validThruWrapper: {
    paddingStart: HSPACING.s16,
    paddingEnd: HSPACING.s10,
  },
  validThru: {
    fontSize: normalizeFontSize(12),
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
  },
  cardNameWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: VSPACING.s10,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: VSPACING.s8,
  },
  listItemWrapper: {
    width: WIDTH * 0.2,
    height: WIDTH * 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: WIDTH * 0.1,
    backgroundColor: COLORS.WHITE,
  
  
  },
  listItemWrapperChecked: {
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    backgroundColor: COLORS.LIGHT_BLUE_WHITE,
    
  },
  expiryCvvWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: HSPACING.s16,
  },
  validThruInput: {
    flex: 1,
  },
  cvvInput: {
    flex: 1,
  },


  continueButton: {
    // marginTop: 0,
    // marginBottom: VSPACING.s16,
  },


});

export default styles;
