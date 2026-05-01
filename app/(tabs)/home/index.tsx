// Clean, reusable React Native Expo components based on your UI
// Assumes you already have SatoshiText and SansText components

import CrownIcon from '@/assets/icons/navigation/crown.svg';
import NotificationIcon from '@/assets/icons/navigation/notifications.svg';
import FeatureCard from '@/components/home/FeatureCard/FeatureCard';
import GemCard from '@/components/home/GemCard/GemCard';
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ContentSection from '@/components/reusable/ContentSectoin/ContentSection';
import ExpertCard from '@/components/reusable/ExpertCard/ExpertCard';
import IconButton from "@/components/reusable/IconButton/IconButton";
import SectionTitle from '@/components/reusable/SectionTitle/SectionTitle';
import { SansText } from "@/components/reusable/Text/SansText";
import { SatoshiText } from "@/components/reusable/Text/SatoshiText";
import { EXPERTS } from '@/data/dummy/expert';
import { GEMS } from '@/data/dummy/gems';
import { useGetMeQuery } from '@/redux/features/auth/authApi';
import { RootState } from "@/redux/store";
import { getTimeBasedGreeting } from "@/utils/greetings";
import { router } from 'expo-router';
import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";

const HomeScreen = () => {
const user = useSelector((state: RootState) => state.auth.user);
const {data:me , isLoading,error} = useGetMeQuery({});
console.log(error)
console.log("user",me);
  return (
    <ScreenWrapper>
      <ScrollView style={{ flex: 1, }}>
        {/* Greeting */}
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <View style={{ flex: 1, gap: 8, paddingHorizontal: 16 }}>
            <SansText style={{
              fontSize: 18,
              color: "#4A4A4A",
              lineHeight: 26
            }} >{getTimeBasedGreeting()}{","}
            </SansText>
            <SatoshiText style={{
              fontSize: 18,
              color: "#0D0D0D",
              fontFamily: "SatoshiBold",
              lineHeight: 26
            }}  >
              {me?.data?.profile?.firstName} {me?.data?.profile?.lastName}
               </SatoshiText>
          </View>
          <View style={{ flexDirection: "row", gap: 18, padding: 16 }}>
            <IconButton
              Icon={NotificationIcon}
              iconColor="#0D0D0D"
            />
            <IconButton
              Icon={CrownIcon}
              iconColor="#0D0D0D"
              onPress={()=>{router.push("/(subscription)/subscription")}}
            />
          </View>

        </View>

        <View style={{
          paddingTop: 26,
          gap: 24,
          marginBottom: 40
        }}><View style={{ paddingHorizontal: 16 }}><SectionTitle title="Today at a glance" /></View>
          <View style={{ gap: 12, paddingHorizontal: 16 }}>
            <ContentSection title={"Daily Horoscope"}>
              <SansText>A quick overview of how today’s planetary positions may influence your day.</SansText>
            </ContentSection>
            <FeatureCard
              title="Today's Cosmic Pulse"
              description="Tap to select your zodiac sign and reveal today’s guidance."
              ctaText="Reveal Today’s Insight"
              image={require("@/assets/images/consmos1.png")}
              onPress={() => router.push("/(astrology)/select-zodiac-signs")}
              date={new Date()}
            />
          </View>
          <View style={{ gap: 12, paddingHorizontal: 16 }}>
            <ContentSection title={"Intent Support Levels"}>
              <SansText>Intents will appear here. Select your zodiac sign to see today’s support levels.</SansText>
            </ContentSection>
          </View>
          <View style={{ gap: 12, paddingHorizontal: 16 }}>
            <ContentSection title={"Kundli"}>
              <SansText>A short insight from your birth chart based on today’s planetary movement.</SansText>
            </ContentSection>
            <FeatureCard
              title="Today’s Chart Insight"
              description="Saturn influences discipline & patience."
              image={require("@/assets/images/consmos2.png")}
              onPress={() => console.log("Clicked")}
              height={214}
            />
          </View>
          <View style={{ gap: 12 }}>
            <View style={{ paddingHorizontal: 16 }}> <ContentSection title={"Featured Astrologers"}>
              <SansText>Verified experts who help interpret charts and planetary periods.</SansText>
            </ContentSection></View>

            <FlatList
              data={EXPERTS}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              renderItem={({ item }) => (
                <ExpertCard
                  name={item.name}
                  experience={item.experience}
                  description={item.description}
                  tags={item.tags}
                  rating={item.rating}
                  image={item.image}
                />
              )}
            />
          </View>
          <View style={{ gap: 12 }}>
            <View style={{ paddingHorizontal: 16 }}> <ContentSection title={"Featured Astrologers"}>
              <SansText>Verified experts who help interpret charts and planetary periods.</SansText>
            </ContentSection></View>

            <FlatList
              data={GEMS}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: 16  , marginTop:30}}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              renderItem={({ item }) => (
                <GemCard
                  title={item.title}
                  description={item.description}
                  benefits={item.benefits}
                  image={item.image}
                />
              )}
            />
          </View>
          <View style={{ gap: 12, paddingHorizontal: 16 }}>
            <ContentSection title={"Today’s Insights  "}>
              <SansText>Short reads to help you understand ongoing planetary themes.</SansText>
            </ContentSection>
            <FeatureCard
              title="Why patience matters during saturn transits"
              image={require("@/assets/images/galaxy1.png")}
              onPress={() => console.log("Clicked")}
              ctaText={"Read in 2 mins"}
              height={214}
            />
            <FeatureCard
              title="Today’s Chart Insight"
              image={require("@/assets/images/galaxy2.png")}
              onPress={() => console.log("Clicked")}
              ctaText={"Read in 2 mins"}
              height={214}
            />
          </View>
        </View>
      </ScrollView></ScreenWrapper>
  );
};

export default HomeScreen;

