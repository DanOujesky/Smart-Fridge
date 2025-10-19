import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FoodItemCard from "../../components/FoodItemCard";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedIcon from "../../components/ThemedIcon";

export default function Index() {
  const [search, setSearch] = useState("");

  const foodItems = [
    {
      id: "1",
      name: "Milk",
      expiresIn: 3,
      icon: require("../../assets/icons/icons_items/milk-icon.png"),
    },
    {
      id: "2",
      name: "Apples",
      expiresIn: 5,
      icon: require("../../assets/icons/icons_items/apple-icon.png"),
    },
    {
      id: "3",
      name: "Cheddar cheese",
      expiresIn: 7,
      icon: require("../../assets/icons/icons_items/cheese-icon.png"),
    },
    {
      id: "4",
      name: "Carrots",
      expiresIn: 10,
      icon: require("../../assets/icons/icons_items/carrot-icon.png"),
    },
    {
      id: "5",
      name: "Yogurt",
      expiresIn: 21,
      icon: require("../../assets/icons/icons_items/yogurt-icon.png"),
    },
  ];

  const filtered = foodItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <View className="flex-1 bg-gray-100 p-4 dark:bg-gray-900">
        <Text className="text-3xl text-black dark:text-white font-bold mb-4">
          Home
        </Text>
        <View className="flex-row items-center bg-white dark:bg-black rounded-2xl px-3 py-2 mb-3">
          <ThemedIcon
            name="search"
            size={20}
            colorBasic="#1f2937"
            colorDark="#e5e7eb"
          />
          <TextInput
            placeholder="Search food..."
            value={search}
            onChangeText={setSearch}
            className="flex-1 ml-2 text-base text-gray-800 dark:text-gray-200 dark:gray-200 dark:placeholder:text-gray-600"
          />
        </View>
        <View className="flex-row justify-between mb-3">
          <TouchableOpacity className="flex-row items-center bg-white dark:bg-black rounded-xl px-3 py-2 shadow-sm">
            <ThemedIcon
              name="filter-outline"
              size={18}
              colorBasic="#1f2937"
              colorDark="#e5e7eb"
            />
            <Text className="ml-1 font-medium text-gray-800 dark:text-gray-200">
              Filter
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center bg-white dark:bg-black rounded-xl px-3 py-2 shadow-sm">
            <ThemedIcon
              name="swap-vertical"
              size={18}
              colorBasic="#1f2937"
              colorDark="#e5e7eb"
            />
            <Text className="ml-1 font-medium text-gray-800 dark:text-gray-200">
              Sort by: Expire
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={filtered}
          renderItem={({ item }) => (
            <FoodItemCard
              name={item.name}
              expiresIn={item.expiresIn}
              icon={item.icon}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity className="absolute bottom-6 right-6 bg-green-600 w-14 h-14 rounded-full items-center justify-center shadow-lg">
          <ThemedIcon name="add" size={28} colorBasic="#fff" colorDark="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
