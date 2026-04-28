/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    contras: "#000000",
    text: "#11181C",
    background: "#FEFDF8",
    primary: "#D6A850",
    primary2: "#ECD7AF",
    secondary: "#1C2542",
    tint: "#D7D7D7",
    tint2: "#5C5C5C",
    tint3: "#F6F6F666",
    tint4: "#828282",
    icon: "#687076",
    tabIconDefault: "#687076",
    // tabIconSelected: tintColorLight,
  },
  dark: {
    contras: "#ffffff",
    text: "#ECEDEE",
    background: "#151718",
    primary: "#151718",
    primary2: "#151718",
    secondary: "#1C2542",
    tint: tintColorDark,
    tint2: tintColorDark,
    tint3: tintColorDark,
    tint4: "#828282",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
