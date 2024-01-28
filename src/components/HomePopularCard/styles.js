import { StyleSheet } from "react-native";
import { HSPACING, SPACING, VSPACING } from "../../utilities/spacing";
import { WIDTH, normalizeFontSize } from "../../utilities/responsive";
import { FONTS } from "../../utilities/fonts";
import { COLORS } from "../../utilities/colors";

const styles = StyleSheet.create({
  card: {
    borderRadius: SPACING.s16,
    width: WIDTH * 0.85,
    elevation: 2,
    marginHorizontal: HSPACING.s6,
    marginBottom: VSPACING.s8,
    paddingTop: VSPACING.s8,
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: HSPACING.s8,
    paddingBottom: VSPACING.s8,
  },
  cardImage: {
    borderRadius: SPACING.s8,
  },
  cardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: HSPACING.s6,
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
  ratingContainer: {
    position: "absolute",
    top: VSPACING.s6,
    left: HSPACING.s14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: HSPACING.s4,
    padding: SPACING.s6,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.s6,
    elevation: 2,
  },
  ratingText: {
    alignSelf: "center",
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.PRIMARY,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.GREY,
    marginVertical: VSPACING.s4,
  },
  cardDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: SPACING.s8,
  },
  cardDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: HSPACING.s6,
  },
  cardDetailsNumber: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  cardDetailsText: {
    fontSize: normalizeFontSize(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.GREY,
  },
  heartContainer: {
    position: "absolute",
    top: VSPACING.s6,
    right: HSPACING.s14,
    backgroundColor: COLORS.WHITE,
    padding: SPACING.s6,
    borderRadius: SPACING.s26 * 3,
  },
  cardTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: HSPACING.s6,
    marginTop: VSPACING.s8,
  },
  cardTitle: {
    fontSize: normalizeFontSize(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.BLACK,
  },
});

export default styles;
