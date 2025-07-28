import { Tabs } from "expo-router";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomeIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  const iconName = focused ? "home" : "home-outline";
  return <MaterialCommunityIcons name={iconName} color={color} size={26} />;
};

const ShopIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  const iconName = focused ? "shopping" : "shopping-outline";
  return <MaterialCommunityIcons name={iconName} color={color} size={26} />;
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarLabel: "홈", tabBarIcon: HomeIcon }}
      />
      <Tabs.Screen
        name="shopping"
        options={{ tabBarLabel: "쇼핑", tabBarIcon: ShopIcon }}
      />
    </Tabs>
  );
}
