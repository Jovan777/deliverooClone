// _layout.tsx

import { Stack } from 'expo-router';
import CustomHeader from './../components/CustomHeader';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name="index" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
