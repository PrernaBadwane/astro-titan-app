// app/onboarding.tsx

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import ReusableButton from "../components/reusable/Button/ReusableButton";
import { SansText } from "../components/reusable/Text/SansText";
import { SatoshiText } from "../components/reusable/Text/SatoshiText";
import { useTheme } from "../hooks/useTheme";
import { onboardingScreenStyles } from "../styles/onboardingScreenStyles";

export default function Onboarding() {
  const router = useRouter();
  const theme = useTheme();
  const styles = onboardingScreenStyles(theme);
  const rotation = useSharedValue(0);
  const finish = async () => {
    await SecureStore.setItemAsync("onboarding_done", "true");
    router.replace("/(auth)/register");
  };
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 12000, // speed (increase for slower)
        easing: Easing.linear,
      }),
      -1, // infinite loop
      false,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));
  return (
    <LinearGradient
      colors={["#EDDEAD", "#F1E8C9", "#F5F5F5"]}
      locations={[0, 0.45, 1]}
      style={styles.container}
    >
      {/* TOP VISUAL */}
      <View style={styles.topSection}>
        <Animated.View style={animatedStyle}>
          <Image
            source={require("../assets/images/planets.webp")}
            style={styles.image}
            contentFit="contain"
          />
        </Animated.View>
      </View>
      <View>
        {/* TEXT CONTENT */}
        <View style={styles.textSection}>
          <SatoshiText style={styles.title}>Astrology, Made Clear</SatoshiText>
          <SansText style={styles.subtitle}>
            Personalized insights designed for real-life decisions.
          </SansText>
        </View>

        {/* BUTTON */}
        <ReusableButton
          onPress={finish}
          title="Get Started"
          variant="solid"
          width="auto"
          paddingHorizontal={22}
        />
      </View>
    </LinearGradient>
  );
}
