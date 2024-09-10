import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="techCrunch"
        options={{
          title: 'TechCrunch',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'laptop' : 'laptop-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="sports"
        options={{
          title: 'Sports',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'football' : 'football-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
