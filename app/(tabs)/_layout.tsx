import React from "react";
import { Tabs } from "expo-router";
import TabIcon from "../../components/TabIcon";
import { icons } from "../../constants/icons";
import { useTheme } from "@react-navigation/native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={() => {
        const { dark } = useTheme();

        return {
          tabBarStyle: {
            backgroundColor: dark ? "#000000" : "#FFFFFF",
            borderTopWidth: 0,
            height: 80,
          },
          tabBarItemStyle: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 5,
          },
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginTop: 2,
          },
          tabBarActiveTintColor: "#53c402",
          tabBarInactiveTintColor: "#7d7d7d",
        };
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
