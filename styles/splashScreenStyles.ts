import { StyleSheet } from "react-native";
import { Colors } from "../constants/theme";

export const splashScreenStyles = (theme: typeof Colors.light) =>
  StyleSheet.create({
    splashBg: {
      flex: 1,
      backgroundColor: theme.background,
    },
    splashContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
