import GlobalBottomSheet from "@/components/reusable/GlobalBottomSheet/GlobalBottomSheet";
import GlobalModal from "@/components/reusable/GlobalModal/GlobalModal";
import { loadAuth } from "@/utils/loadAuth";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import AnimatedScreen from "../components/layout/AnimatedScreen";
import ScreenWrapper from "../components/layout/ScreenWrapper";
import { store } from "../redux/store";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SatoshiLight: require("../assets/fonts/satoshi/Satoshi-Light.otf"),
    Satoshi: require("../assets/fonts/satoshi/Satoshi-Regular.otf"),
    SatoshiMedium: require("../assets/fonts/satoshi/Satoshi-Medium.otf"),
    SatoshiBold: require("../assets/fonts/satoshi/Satoshi-Bold.otf"),
    SatoshiExtraBold: require("../assets/fonts/satoshi/Satoshi-Black.otf"),
    SansExtraLight: require("../assets/fonts/google_sans/GeneralSans-Extralight.otf"),
    SansLight: require("../assets/fonts/google_sans/GeneralSans-Light.otf"),
    Sans: require("../assets/fonts/google_sans/GeneralSans-Regular.otf"),
    SansMedium: require("../assets/fonts/google_sans/GeneralSans-Medium.otf"),
    SansSemiBold: require("../assets/fonts/google_sans/GeneralSans-Semibold.otf"),
    SansBold: require("../assets/fonts/google_sans/GeneralSans-Bold.otf"),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
       console.log("START loadAuth");
      await loadAuth();
       console.log("end loadAuth");
      setIsReady(true);
    };
    init();
  }, []);

  useEffect(() => {
    if (loaded && isReady) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isReady]);

  if (!loaded || !isReady) return null;

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="dark" hidden={false} />
          <ScreenWrapper>
            <AnimatedScreen>
              <Slot />
            </AnimatedScreen>
          </ScreenWrapper>
          <GlobalBottomSheet />
          <GlobalModal />
        </GestureHandlerRootView>
        {/* <DevResetPanel /> */}

      </Provider>
    </SafeAreaProvider>
  );
}
