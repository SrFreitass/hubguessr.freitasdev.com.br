import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-reanimated';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Manrope-Regular': require('@/assets/fonts/Manrope-Regular.ttf'),
    'Manrope-Bold': require('@/assets/fonts/Manrope-Bold.ttf'),
    'Manrope-ExtraBold': require('@/assets/fonts/Manrope-ExtraBold.ttf'),
    'Manrope-Semibold': require('@/assets/fonts/Manrope-SemiBold.ttf'),
    'Manrope-Medium': require('@/assets/fonts/Manrope-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(pages)" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
