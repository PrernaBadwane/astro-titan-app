


import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { SatoshiText } from "../components/reusable/Text/SatoshiText";
import { useTheme } from "../hooks/useTheme";
import { setAuth } from "../redux/features/auth/authSlice";
import { splashScreenStyles } from "../styles/splashScreenStyles";

export default function Splash() {
  const theme = useTheme();
  const styles = splashScreenStyles(theme);
  const scale = useSharedValue(0.9);
  const opacity = useSharedValue(0);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });
    scale.value = withTiming(1, { duration: 500 });

    const goNext = async () => {
      const done = await SecureStore.getItemAsync("onboarding_done");
      const token = await SecureStore.getItemAsync("ACCESS_TOKEN");
      const userStr = await SecureStore.getItemAsync("USER");
      const profileCompleted = await SecureStore.getItemAsync("IS_PROFILE_COMPLETE");
      const user = userStr ? JSON.parse(userStr) : null;
      setTimeout(() => {
        if (token || profileCompleted) {
          dispatch(setAuth({ token, user: user }));
          router.replace("/(tabs)/home");
        } else if (done) router.replace("/(auth)/login");
        else router.replace("/onboarding");
      }, 1200);
    };

    goNext();
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={[styles.splashBg]}>


      <View style={[styles.splashContainer]}>
        <Animated.View style={logoStyle}>
          {/* <Image
            source={require("../assets/images/planates.png")}
            style={[styles.splashLogo]}
            contentFit="contain"
          /> */}
          <SatoshiText>
            AstroTitan
          </SatoshiText>
        </Animated.View>
      </View>
    </View>
  );
}
