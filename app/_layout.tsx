// _layout.tsx

import { Stack, useNavigation } from 'expo-router';
import CustomHeader from './../components/CustomHeader';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {

  const navigation = useNavigation()
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name="index" options={{ header: () => <CustomHeader /> }} />
          <Stack.Screen 
            name="(modal)/filter" options={{
            presentation:"modal",
            headerTitle:'Filter',
            headerShadowVisible:false,
            headerTitleAlign:'center',
            headerStyle:{
              backgroundColor:Colors.lightGrey,
            },
            headerLeft:()=>(
              <TouchableOpacity onPress={()=>{
                navigation.goBack()
              }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            )

          }} />
          <Stack.Screen
          name="(modal)/location-search"
          options={{
            presentation: 'fullScreenModal',
            headerTitle: 'Select location',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(modal)/dish"
          options={{
            presentation: 'modal',
            headerTitle: '',
            headerTransparent: true,

            headerLeft: () => (
              <TouchableOpacity
                style={{ backgroundColor: '#fff', borderRadius: 20, padding: 6 }}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen 
        name='basket'
        options={{
          headerTitle: 'Basket',
          headerLeft: () => (
            <TouchableOpacity 
              onPress={()=>{navigation.goBack()}}>
              <Ionicons name="arrow-back" size={28} color={Colors.primary} />
            </TouchableOpacity>
          )
        }}
        
        />

        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
