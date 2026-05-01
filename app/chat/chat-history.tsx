// Clean, reusable React Native Expo components based on your UI
// Assumes you already have SatoshiText and SansText components

import NoteIcon from '@/assets/icons/navigation/note.svg';
import AuthTitle from "@/components/auth/AuthTitle";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AppHeader from "@/components/reusable/AppHeader/AppHeader";
import ReusableButton from '@/components/reusable/Button/ReusableButton';
import { SansText } from "@/components/reusable/Text/SansText";
import { router, } from 'expo-router';
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Address = () => {
    const dummySessions = [
  {
    title: "Today",
    data: [
      {
        id: "1",
        name: "Rahul Sharma",
        time: "09:30 AM",
        type: "Career & clarity guidance",
      },
      {
        id: "2",
        name: "Kajal Agrawal",
        time: "08:30 AM",
        type: "Career & clarity guidance",
      },
    ],
  },
  {
    title: "Yesterday",
    data: [
      {
        id: "3",
        name: "Rahul Sharma",
        time: "09:30 AM",
        type: "Career & clarity guidance",
      },
      {
        id: "4",
        name: "Kajal Agrawal",
        time: "08:30 AM",
        type: "Career & clarity guidance",
      },
    ],
  },
];

const sessions = dummySessions;
const hasSessions = sessions.length > 0;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScreenWrapper>

                <AppHeader onPressBack={() => { router.replace("/(tabs)/profile") }}>
                    <AuthTitle title="Session History">
                        <SansText>
                            Review your past consultations.
                        </SansText>
                    </AuthTitle>
                </AppHeader>
                <View style={{ flex: 1, paddingHorizontal: 16 }}>

                    {!hasSessions ? (
                        // EMPTY STATE
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <NoteIcon height={124} width={124} />

                            <SansText style={{ marginTop: 16, textAlign: "center" }}>
                                No sessions yet
                            </SansText>
                        </View>
                    ) : (
                        // LIST STATE
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ gap: 20, paddingVertical: 16 }}>

                                {/* TODAY */}
                                <SansText style={{ fontSize: 14, color: "#757575" }}>
                                    Today
                                </SansText>

                                <SessionItem name="Rahul Sharma" time="09:30 AM" />
                                <SessionItem name="Kajal Agrawal" time="08:30 AM" />

                                {/* YESTERDAY */}
                                <SansText style={{ fontSize: 14, color: "#757575", marginTop: 16 }}>
                                    Yesterday
                                </SansText>

                                <SessionItem name="Rahul Sharma" time="09:30 AM" />
                                <SessionItem name="Kajal Agrawal" time="08:30 AM" />

                            </View>
                        </ScrollView>
                    )}

                    {/* FIXED BUTTON */}
                    <ReusableButton
                        onPress={() => router.push("/(tabs)/astrologers")}
                        title="Book Session"
                    />
                </View>
            </ScreenWrapper></SafeAreaView>
    );
};
export default Address;

const SessionItem = ({ name, time }: any) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            {/* LEFT */}
            <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                <View
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        backgroundColor: "#ddd",
                    }}
                />

                <View>
                    <SansText style={{ fontSize: 14 }}>{name}</SansText>
                    <SansText style={{ fontSize: 12, color: "#757575" }}>
                        Career & clarity guidance
                    </SansText>
                </View>
            </View>

            {/* RIGHT */}
            <SansText style={{ fontSize: 12, color: "#757575" }}>
                {time}
            </SansText>
        </View>
    );
};
