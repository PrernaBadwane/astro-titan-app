import AuthTitle from "@/components/auth/AuthTitle";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AppHeader from "@/components/reusable/AppHeader/AppHeader";
import ReusableButton from "@/components/reusable/Button/ReusableButton";
import FormInput from "@/components/reusable/InputField/FormInput";
import { SansText } from "@/components/reusable/Text/SansText";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type FormType = {
  addressLine1: string;
  addressLine2: string;
  state: string;
  pincode: string;
  type: "home" | "office";
  saveForFuture: boolean;
};

const AddAddress = () => {
  const params = useLocalSearchParams();

  const isEdit = params.mode === "edit";

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isValid },
  } = useForm<FormType>({
    defaultValues: {
      addressLine1: "",
      addressLine2: "",
      state: "",
      pincode: "",
      type: "home",
      saveForFuture: false,
    },
    mode: "onChange",
  });

  const selectedType = watch("type");
  const saveChecked = watch("saveForFuture");

  // 🔥 PREFILL FOR EDIT
  useEffect(() => {
    if (isEdit && params.data) {
      try {
        const parsed = JSON.parse(params.data as string);

        reset({
          addressLine1: parsed.addressLine1,
          addressLine2: parsed.addressLine2,
          state: parsed.state,
          pincode: parsed.pincode,
          type: parsed.type || "home",
          saveForFuture: parsed.saveForFuture || false,
        });
      } catch (e) {
        console.log("Parse error", e);
      }
    }
  }, [params]);

  // 🔥 SUBMIT
  const onSubmit = async (data: FormType) => {
    try {
      if (isEdit) {
        console.log("✏️ Updating address:", data);
        // 👉 CALL UPDATE API
      } else {
        console.log("➕ Adding address:", data);
        // 👉 CALL ADD API
      }

      router.replace("/profile/(address)/add-address-success");
    } catch (err) {
      console.log("❌ ERROR:", err);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenWrapper>

        {/* 🔥 HEADER */}
        <AppHeader>
          <AuthTitle title={isEdit ? "Edit Address" : "Delivery Address"} />
        </AppHeader>

        <View style={{ flexGrow: 1, justifyContent: "space-between", padding: 16 }}>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ gap: 16 }}
            showsVerticalScrollIndicator={false}
          >
            {/* ADDRESS LINE 1 */}
            <FormInput
              control={control}
              name="addressLine1"
              label="Flat No. / Apartment Name / Floor No."
              placeholder="Enter your address..."
              rules={{ required: "Required" }}
            />

            {/* ADDRESS LINE 2 */}
            <FormInput
              control={control}
              name="addressLine2"
              label="Locality / Area Name / City"
              placeholder="Enter your address..."
              rules={{ required: "Required" }}
            />

            {/* STATE + PINCODE */}
            <View style={{ flexDirection: "row", gap: 12 }}>
              <View style={{ flex: 1 }}>
                <FormInput
                  control={control}
                  name="state"
                  label="State"
                  placeholder="Enter your state..."
                  rules={{ required: "Required" }}
                />
              </View>

              <View style={{ flex: 1 }}>
                <FormInput
                  control={control}
                  name="pincode"
                  label="Pincode"
                  placeholder="Enter your pincode..."
                  rules={{
                    required: "Required",
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: "Enter valid 6-digit pincode",
                    },
                  }}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={{ height: 1, backgroundColor: "#E6D18B" }} />

            {/* ADDRESS TYPE */}
            <View>
              <SansText style={{ marginBottom: 8 }}>
                Save Address Type As
              </SansText>

              <View style={{ flexDirection: "row", gap: 12 }}>
                {["home", "office"].map((type) => {
                  const isSelected = selectedType === type;

                  return (
                    <TouchableOpacity
                      key={type}
                      onPress={() =>
                        setValue("type", type as "home" | "office")
                      }
                      style={{
                        paddingVertical: 12,
                        flexDirection: "row",
                        gap: 8,
                        alignItems: "center",
                        paddingHorizontal: 18,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "#D4AF37",
                        backgroundColor: isSelected ? "#D4AF37" : "#FBF7EB",
                      }}
                    >
                      <SansText style={{ color: "#0D0D0D" }}>
                        {type}
                      </SansText>
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderWidth: 1,
                          borderRadius: 12,
                          borderColor: isSelected ? "#FBF7EB" : "#D4AF37",
                          backgroundColor: "#FBF7EB",
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* CHECKBOX */}
            <TouchableOpacity
              onPress={() => setValue("saveForFuture", !saveChecked)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                marginTop: 8,
              }}
            >
              <View style={{ backgroundColor: "#000", padding: 2, borderRadius: 3 }}>
                <View
                  style={{
                    width: 22,
                    height: 22,
                    backgroundColor: saveChecked ? "#D4AF37" : "#fff",
                  }}
                />
              </View>

              <SansText>
                Save this address for future orders
              </SansText>
            </TouchableOpacity>
          </ScrollView>

          {/* 🔥 BUTTON */}
          {isValid && (
            <ReusableButton
              title={isEdit ? "Update Address" : "Add Address"}
              onPress={handleSubmit(onSubmit)}
              style={{ marginTop: 24 }}
            />
          )}
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
};

export default AddAddress;