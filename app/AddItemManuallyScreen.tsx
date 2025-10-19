import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const AddItemManuallyScreen = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAdd = () => {
    console.log({ name, category, date });
  };
  return (
    <SafeAreaView className="flex-1 bg-[#FAFAF8] px-5">
      <View className="flex-row justify-end items-center mb-6 mt-2">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Text className="text-green-700 text-lg font-medium">Cancel</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center mb-6">
          <Ionicons name="cube-outline" size={80} color="#2D6A4F" />
        </View>
        <Text className="text-lg font-semibold text-green-900 mb-1">Name</Text>
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-800 placeholder:pl-4"
          placeholder="Milk"
          value={name}
          onChangeText={setName}
        />
        <Text className="text-lg font-semibold text-green-900 mb-1">
          Category
        </Text>
        <TouchableOpacity
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 flex-row justify-between items-center"
          onPress={() => console.log("Open category picker")}
        >
          <Text className="text-gray-500">{category || "Select category"}</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-green-900 mb-1">
          Expiration Date
        </Text>
        <TouchableOpacity
          className="border border-gray-300 rounded-xl px-4 py-3 mb-6 flex-row justify-between items-center"
          onPress={() => setShowDatePicker(true)}
        >
          <Text className="text-gray-500">
            {date ? date.toLocaleDateString() : "MM/DD/YYYY"}
          </Text>
          <Ionicons name="calendar-outline" size={20} color="#999" />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}
        <TouchableOpacity
          onPress={handleAdd}
          className="bg-green-700 rounded-xl py-4 mt-4 items-center"
        >
          <Text className="text-white text-lg font-semibold">Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddItemManuallyScreen;
