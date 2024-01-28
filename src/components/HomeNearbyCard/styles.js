import { StyleSheet } from "react-native";
import { WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
import { COLORS } from "../../utilities/colors";

const styles = StyleSheet.create({
  card: {
    width: WIDTH * 0.95,
    paddingVertical: VSPACING.s8,
    paddingHorizontal: HSPACING.s8,
    borderRadius: SPACING.s16,
    marginBottom: VSPACING.s8,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: HSPACING.s12,
  },
  cardDetailsWrapper: {
    alignSelf: "center",
    gap: VSPACING.s6,
  },
  cardImage: {
    borderRadius: SPACING.s10,
    width: WIDTH * 0.4,
  },
  cardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: HSPACING.s6,
  },
  cardTitle: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.BLACK,
  },
  cardCost: {
    fontSize: normalizeFontSize(14),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.GREY,
  },
  cardColoredCost: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.BOLD,
    color: COLORS.PRIMARY,
  },
  cardTitleContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "center",
    gap: VSPACING.s12,
  },
  divider: {
    width: WIDTH * 0.45,
    height: 1,
    backgroundColor: COLORS.GREY,
    marginVertical: VSPACING.s4,
  },
  cardDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: VSPACING.s8,
  },
  cardDetailsNumber: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  cardDetailsText: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.GREY,
  },
  cardDetailsNumberContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginStart: HSPACING.s12,
    gap: HSPACING.s8,
  },
  cardDetailsText: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.GREY,
  },
  heartContainer: {
    position: "absolute",
    top: VSPACING.s8,
    right: WIDTH * 0.5 + HSPACING.s10,
    backgroundColor: COLORS.WHITE,
    padding: SPACING.s6,
    borderRadius: SPACING.s20,
  },
  ratingContainer: {
    position: "absolute",
    top: VSPACING.s8,
    left: HSPACING.s6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: HSPACING.s4,
    padding: SPACING.s6,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s6,
    elevation: 2,
  },
  alignSelf: "center",
  fontSize: normalizeFontSize(16),
  fontFamily: FONTS.SEMI_BOLD,
  color: COLORS.PRIMARY,
});

export default styles;
