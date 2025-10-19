import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabIcon from "../../components/TabIcon";
import { icons } from "../../constants/icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarActiveTintColor: "#53c402",
        tabBarInactiveTintColor: "#7d7d7d",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconBasic={icons.homeBasic}
              iconFocused={icons.homeFocused}
              imageSize={40}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          headerShown: false,
          title: "Recipes",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconBasic={icons.recipesBasic}
              iconFocused={icons.recipesFocused}
              imageSize={45}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shoppinglist"
        options={{
          headerShown: false,
          title: "Shopping List",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconBasic={icons.shoppingListBasic}
              iconFocused={icons.shoppingListFocused}
              imageSize={35}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconBasic={icons.profileBasic}
              iconFocused={icons.profileFocused}
              imageSize={32}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
