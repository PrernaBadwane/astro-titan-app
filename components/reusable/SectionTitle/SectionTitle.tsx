import React from "react";
import { StyleSheet, View } from "react-native";
import { SansText } from "../Text/SansText";
import { SatoshiText } from "../Text/SatoshiText";

const SectionTitle = ({
  title,
  titleFontSize,
  children,
}: {
  title: string;
  titleFontSize?:number;
  children?: React.ReactNode;
}) => {
  return (
    <View >
      <SatoshiText style={[styles.title,{  fontSize: titleFontSize||28,}]}>{title}</SatoshiText>

      {children && <SansText style={styles.subtitle}>{children}</SansText>}
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  title: {
  
    fontFamily: "SatoshiBold",
    letterSpacing: -0.32,
    color: "#0D0D0D",
  },

  subtitle: {
    fontSize: 18,
    marginTop: 8,
    color: "#0D0D0D",
    lineHeight: 26,
  },
});
