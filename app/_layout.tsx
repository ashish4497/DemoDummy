import { DarkTheme, DefaultTheme, getFocusedRouteNameFromRoute, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Text } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="(tabs)"
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
            return {
              headerShown: true,
              headerBackTitle: 'Back',
              headerTitleAlign: 'left',
              headerTitle: routeName === 'index' ? 'The Next Time' : routeName,
              headerStyle: {
                backgroundColor: colorScheme === 'dark' ? '#333' : '#fff', 
              },
              headerTintColor: colorScheme === 'dark' ? '#fff' : '#000', 
              headerTitleStyle: {
                fontFamily: 'SpaceMono', 
              },
            };
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
