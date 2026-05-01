// Clean, reusable React Native Expo components based on your UI
// Assumes you already have SatoshiText and SansText components

import LocationIcon from '@/assets/icons/navigation/location.svg';
import AuthTitle from "@/components/auth/AuthTitle";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AddressCard from '@/components/profile/address/AddressCard';
import AppHeader from "@/components/reusable/AppHeader/AppHeader";
import DeleteAddressSection from '@/components/reusable/BottomSheet/DeleteAddressSectoin';
import ReusableButton from '@/components/reusable/Button/ReusableButton';
import { SansText } from "@/components/reusable/Text/SansText";
import BottomSheetService from '@/redux/features/ui/GlobalSheet/BottomSheetService';
import { router, } from 'expo-router';
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Address = () => {
      const onPressDelete = () => {
        BottomSheetService.open(
          <DeleteAddressSection onCancel={BottomSheetService.close} onDelete={() => { }} />,
          {
            height: 400,
            hasGradient: true,
          }
        );
      };
    const addresses = [
        {
            id: "addr_001",
            user: {
                name: "Rohan Deshmukh",
                phone: "+91 9370305059",
            },
            location: {
                line1: "Flat no. 302, Sai Residency, 3rd Floor",
                line2:
                    "Nirmiti Vihar, Near Sumanshree Apartment",
                city: "Pune",
                pincode: "411027",
                country: "India",
            },
            isDefault: true,
        },
        {
            id: "addr_002",
            user: {
                name: "Rohan Deshmukh",
                phone: "+91 9370305059",
            },
            location: {
                line1: "Flat no. 302, Sai Residency, 3rd Floor",
                line2:
                    "Nirmiti Vihar, Near Sumanshree Apartment",
                city: "Pune",
                pincode: "411027",
                country: "India",
            },
            isDefault: true,
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScreenWrapper>

                <AppHeader onPressBack={() => { router.replace("/(tabs)/profile") }}>
                    <AuthTitle title={addresses.length < 1 ? "No saved addresses" : "Saved address"}>
                        {(addresses.length < 1) && <SansText>
                            Add an address for deliveries, prasad, or home pooja.
                        </SansText>}
                    </AuthTitle>
                </AppHeader>
                <View style={{ paddingHorizontal: 16, flexGrow: 1, marginBottom: 16 }}>
                    {(addresses.length < 1) && <View
                        style={{
                            flexGrow: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingHorizontal: 16,
                        }}
                    >
                        <View style={{ paddingHorizontal: 16, gap: 24, paddingVertical: 24, margin: "auto" }}>

                            <SansText>
                                <LocationIcon height={124} width={124} />
                            </SansText>
                        </View>


                        {/* DELETE */}

                    </View>

                    }
                    {addresses.length !== 0 && (
                        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                            <View style={{ gap: 24, paddingVertical: 24 }}>
                                {addresses.map((item) => (
                                    <AddressCard
                                        key={item.id}
                                        data={item}
                                        onEdit={() => {
                                            router.push({
                                                pathname: "/profile/(address)/add-address",
                                                params: {
                                                    mode: "edit",
                                                    data: JSON.stringify(item),
                                                },
                                            });
                                        }}
                                        onDelete={onPressDelete}
                                    />
                                ))}
                            </View>
                        </ScrollView>
                    )}
                    <ReusableButton onPress={() => { router.push("/profile/(address)/add-address") }} title='Add New Address'></ReusableButton></View></ScreenWrapper></SafeAreaView>
    );
};
export default Address;
