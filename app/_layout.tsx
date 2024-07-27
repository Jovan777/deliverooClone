
import { Stack } from 'expo-router';
import CustomHeader from './../components/CustomHeader'

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
export const unstable_settings={
  initialRoutename:'index'
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return (
      <Stack>
        <Stack.Screen name="index" options={{ header: ()=> <CustomHeader/> }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
