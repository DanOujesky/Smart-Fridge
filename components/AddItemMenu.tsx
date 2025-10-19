import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ThemedIcon from "./ThemedIcon";
import { router } from "expo-router";

const AddItemMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute right-6 items-center"
      style={{ bottom: insets.bottom + 20 }}
    >
      {isOpen && (
        <TouchableOpacity
          onPress={() => router.push("/AddItemManuallyScreen")}
          className="mb-3 w-12 h-12 rounded-full bg-green-600 items-center justify-center shadow-lg"
        >
          <ThemedIcon
            name="camera-outline"
            size={22}
            colorBasic="#fff"
            colorDark="#fff"
          />
        </TouchableOpacity>
      )}
      {isOpen && (
        <TouchableOpacity
          onPress={() => router.push("/AddItemManuallyScreen")}
          className="mb-3 w-12 h-12 rounded-full bg-green-600 items-center justify-center shadow-lg"
        >
          <ThemedIcon
            name="create-outline"
            size={22}
            colorBasic="#fff"
            colorDark="#fff"
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-600 items-center justify-center shadow-lg"
      >
        <ThemedIcon
          name={isOpen ? "close" : "add"}
          size={28}
          colorBasic="#fff"
          colorDark="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddItemMenu;
