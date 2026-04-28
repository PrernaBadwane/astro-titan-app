// Clean, reusable React Native Expo components based on your UI
// Assumes you already have SatoshiText and SansText components

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import { RootState } from "@/redux/store";
import React from "react";
import { ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";

const Remedies = () => {
const user = useSelector((state: RootState) => state.auth.user);
console.log("USER FROM REDUX:", user);
  return (
    <ScreenWrapper>
      <ScrollView style={{ flex: 1, }}>
        <Text> Remedies</Text>

      </ScrollView></ScreenWrapper>
  );
};
export default Remedies;