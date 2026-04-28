// Clean, reusable React Native Expo components based on your UI
// Assumes you already have SatoshiText and SansText components

import LocationIcon from '@/assets/icons/navigation/location.svg';
import AuthTitle from "@/components/auth/AuthTitle";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AddressCard from '@/components/profile/address/AddressCard';
import AppHeader from "@/components/reusable/AppHeader/AppHeader";
import ReusableButton from '@/components/reusable/Button/ReusableButton';
import { SansText } from "@/components/reusable/Text/SansText";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Address = () => {
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

                <AppHeader >
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
                        <ScrollView style={{ flex: 1 }}>
                            <View style={{ gap: 24, paddingVertical: 24 }}>
                                {addresses.map((item) => (
                                    <AddressCard
                                        key={item.id}
                                        data={item}
                                        onEdit={() => console.log("Edit", item.id)}
                                        onDelete={() => console.log("Delete", item.id)}
                                    />
                                ))}
                            </View>
                        </ScrollView>
                    )}
                    <ReusableButton onPress={() => { }} title='Add New Address'></ReusableButton></View></ScreenWrapper></SafeAreaView>
    );
};
export default Address;
