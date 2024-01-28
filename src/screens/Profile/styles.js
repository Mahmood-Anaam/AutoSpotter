import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
import { normalizeFontSize } from "../../utilities/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: SPACING.s24,
  },
  infoContainer: {
    alignItems: "center",
    paddingBottom: SPACING.s24,
    marginBottom: SPACING.s24,
    borderBottomWidth: 2,
    borderColor: "#EEEEEE",
  },
  name: {
    fontSize: normalizeFontSize(SPACING.s24),
    fontFamily: FONTS.BOLD,
  },
  email: {
    fontSize: normalizeFontSize(SPACING.s16),
    fontFamily: FONTS.MEDIUM,
  },
  BMSHWrapper: {
    backgroundColor: "#09101DCA",
  },
  BMSHDraggableIcon: {
    backgroundColor: COLORS.GREY,
    width: SPACING.s40 * 2,
    height: SPACING.s6,
  },
  BMSHContainer: {
    flex: 1,
    borderTopLeftRadius: SPACING.s20,
    borderTopRightRadius: SPACING.s20,
    elevation: 3,
    paddingHorizontal: HSPACING.s24,
  },
  BMSHLogoutContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: VSPACING.s24,
    paddingBottom: VSPACING.s24,
    borderBottomWidth: 2,
    borderColor: "#EEEEEE",
  },
  BMSHLogoutText: {
    color: COLORS.RED,
    fontSize: normalizeFontSize(24),
    fontFamily: FONTS.SEMI_BOLD,
  },
  BMSHLogoutMsgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: VSPACING.s24,
  },
  BMSHLogoutMsgText: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.MEDIUM,
  },
  BMSHLogMeOutBTN: {
    marginBottom: VSPACING.s24,
  },
  BMSHTitleStyle: {
    color: COLORS.PRIMARY,
  },
});

export default styles;
