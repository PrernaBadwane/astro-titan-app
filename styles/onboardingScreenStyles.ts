import { StyleSheet } from "react-native";
import { Colors } from "../constants/theme";

export const onboardingScreenStyles = (theme: typeof Colors.light) =>
  StyleSheet.create({
    container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    paddingVertical:56
  },

  topSection: {
    alignItems: "center",
  },

  image: {
    width: 360,
    height: 360,
  },

  textSection: {
    alignItems: "center",
    gap: 12,
  },

  title: {
    fontSize: 24,
    fontFamily: "SatoshiBold",
    color: "#0D0D0D",
    lineHeight:28,
    letterSpacing:-0.07
  },

  subtitle: {
    fontSize: 16,
    color: "#0D0D0D",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
    marginBottom:56
  },

  button: {
    backgroundColor: "#C7A534",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "SatoshiMedium",
  },
  });
