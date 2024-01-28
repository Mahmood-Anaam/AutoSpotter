import { StyleSheet } from "react-native";
import { SPACING } from "../../utilities/spacing";
import { FONTS } from "../../utilities/fonts";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flex: 1,
  },
  leftIconContainer: {
    marginRight: SPACING.s16,
  },
  title: {
    fontSize: SPACING.s24,
    fontFamily: FONTS.SEMI_BOLD,
  },
  rightIconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
  },
});

export default styles;
