// Clean, reusable React Native Expo components based on your UI
// Assumes you already have SatoshiText and SansText components

import ArrowRoundedIcon from '@/assets/icons/actions/arrow-down-round.svg';
import AuthTitle from "@/components/auth/AuthTitle";
import { IconName, ICONS } from "@/components/icons";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AppHeader from "@/components/reusable/AppHeader/AppHeader";
import LogoutSection from '@/components/reusable/BottomSheet/LogoutSection';
import ReusableButton from '@/components/reusable/Button/ReusableButton';
import SectionTitle from "@/components/reusable/SectionTitle/SectionTitle";
import { SansText } from "@/components/reusable/Text/SansText";
import { SatoshiText } from '@/components/reusable/Text/SatoshiText';
import BottomSheetService from '@/redux/features/ui/GlobalSheet/BottomSheetService';
import { RootState } from "@/redux/store";
import { Image } from "expo-image";
import { router } from 'expo-router';
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("USER FROM REDUX:", user);

  const onPressLogout = () => {
    BottomSheetService.open(
      <LogoutSection onCancel={BottomSheetService.close} onLogout={() => { }} />,
      {
        height: 400,
        hasGradient: true,
      }
    );
  };

  return (
    <ScreenWrapper>

      <AppHeader showBack={false} >
        <AuthTitle title="Profile">
          <SansText style={{ fontSize: 18 }}>
            Manage your personal details & preferences.
          </SansText>
        </AuthTitle>
      </AppHeader>
      <ScrollView style={{ flex: 1, paddingBottom: 0 }}>
        <View style={{ paddingHorizontal: 16, gap: 24, paddingVertical: 24 }}>
          <View style={styles.profileCard}>
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={styles.avatar}
            />
            <View style={styles.profileLeft}>

              <View style={{ gap: 8, width:"70%" }}>
                <SatoshiText style={styles.name}>Rohan Deshmukh</SatoshiText>
                <SansText style={styles.desc}>Name, Gender & Contact Info</SansText>
              </View>
              <View
                style={{
                  backgroundColor: "#F5F5F5",
                  padding: 12,
                  borderRadius: 40,
                  transform: [{ rotate: "-90deg" }],
                }}
              >
                <ArrowRoundedIcon color="#0D0D0D" />
              </View>

            </View>


          </View>

          {/* PERSONAL */}
          <View> <SectionTitle titleFontSize={18} title="Personal"></SectionTitle>
            <View style={styles.card}>
              <ProfileItem title="Birth Details" icon="CalenderIcon" />
              <ProfileItem title="Orders" icon="PackageIcon" />
              <ProfileItem title="Session History" icon="NoteIcon"  onPress={()=>{router.push("/chat/chat-history")}}/>
              <ProfileItem title="Saved Addresses" icon="LocationIcon"  onPress={()=>{router.push("/profile/(address)/address")}} />
            </View></View>

          <View><SectionTitle titleFontSize={18} title="General"></SectionTitle>
            <View style={styles.card}>
              <ProfileItem title="Subscription Status" icon="TransactionIcon" />
              <ProfileItem title="Privacy" icon="SecurityIcon" />
              <ProfileItem title="Logout" icon="LogoutIcon" onPress={onPressLogout} />
            </View></View>
          {/* GENERAL */}
          <ReusableButton onPress={() => { }} variant='error' title='Delete'>

          </ReusableButton>

        </View>


        {/* DELETE */}

      </ScrollView></ScreenWrapper>
  );
};
export default Profile;

const ProfileItem = ({ title, icon, onPress }: { title: string; icon: IconName, onPress?: () => void; }) => {
  const IconComponent = ICONS[icon];

  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <View style={styles.rowLeft}>
        <IconComponent width={24} height={24} />
        <SansText style={styles.rowText}>{title}</SansText>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8DFC9",
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },

  profileCard: {
    backgroundColor: "#0D0D0D",
    borderRadius: 24,
    padding: 24, gap: 24,
  },

  profileLeft: {
    flexDirection: "row",
    alignItems:"flex-end",
    justifyContent: "space-between",
    gap: 12,
  },

  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderColor: "#FBF7EB",
    borderWidth: 1
  },

  name: {
    color: "#F5F5F5",
    fontSize: 18,
    fontFamily: "SatoshiBold",
    lineHeight: 26,
  },

  desc: {
    color: "#F5F5F5",
    fontSize: 18,
    lineHeight: 26,
  },


  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 24,
    marginTop: 12
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 24,
    alignItems: "center",
  },

  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  rowText: {
    fontSize: 18,
    color: "#0D0D0D"
  },

  deleteBtn: {
    backgroundColor: "#C0392B",
    padding: 14,
    borderRadius: 24,
    alignItems: "center",
  },

  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },
});