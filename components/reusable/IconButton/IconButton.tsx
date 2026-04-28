import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  Icon: React.FC<any>;   // SVG component
  size?: number;         // total button size
  iconSize?: number;     // inner icon size
  bgColor?: string;
  iconColor?: string;
  onPress?: () => void;
  style?: any;
};

const IconButton = ({
  Icon,
  size = 48,
  iconSize = 24,
  bgColor = "#F5F5F5",
  iconColor = "#000",
  onPress,
  style,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={[
          styles.container,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: bgColor,
          },
          style,
        ]}
      >
        <Icon width={iconSize} height={iconSize} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});