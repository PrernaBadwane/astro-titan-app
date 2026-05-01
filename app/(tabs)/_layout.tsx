import { CustomTabBar } from "@/components/navigation/CustomTabBar";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export type CustomTabOptions = BottomTabNavigationOptions & {
  tabIcon?: {
    active: string;
    inactive: string;
  };
  isCenter?: boolean;
};

export default function TabsLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen
          name="home"
          options={
            {
              tabIcon: {
                active: "homeActive",
                inactive: "homeInactive",
              },
              title: "Home",
            } as CustomTabOptions
          }
        />

        <Tabs.Screen
          name="kundali"
          options={
            {
              tabIcon: {
                active: "calendarActive",                inactive: "calendarInactive",
              },
              title: "Kundali",
            } as CustomTabOptions
          }
        />  

        <Tabs.Screen
          name="remedies"
          options={
            {
              tabIcon: {
                active: "firePitActive",
                inactive: "firePitInactive",
              },
              title: "Remedies",
            } as CustomTabOptions
          }
        />
        <Tabs.Screen
          name="astrologers"
          options={
            {
              tabIcon: {
                active: "starActive",
                inactive: "starInactive",
              },
              title: "Astrologer",
            } as CustomTabOptions
          }
        />
        <Tabs.Screen
          name="profile"
          options={
            {
              tabIcon: {
                active: "userActive",
                inactive: "userInactive",
              },
              title: "Profile",
            } as CustomTabOptions
          }
        />

      </Tabs>
    </SafeAreaView>
  );
}
