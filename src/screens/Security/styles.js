import { StyleSheet } from "react-native";
import { COLORS } from "../../utilities/colors";
import { SPACING } from "../../utilities/spacing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    padding: SPACING.s24,
  },
  containerStyle: {
    marginBottom: SPACING.s24,
  },
  titleStyle: {
    color: COLORS.PRIMARY,
  },
});

export default styles;
