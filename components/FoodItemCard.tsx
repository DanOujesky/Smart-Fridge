import { View, Text, Image } from "react-native";
import React from "react";

type FoodItemCardProps = {
  name: string;
  expiresIn: number;
  icon: any;
};

const FoodItemCard = ({ name, expiresIn, icon }: FoodItemCardProps) => {
  return (
    <View className="flex-row items-center bg-white dark:bg-black rounded-2xl mb-2 shadow-sm">
      <Image
        source={icon}
        className="w-20 h-20 mr-4"
        resizeMode="contain"
      ></Image>
      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-800 dark:text-gray-200">
          {name}
        </Text>
        <Text className="text-gray-500 dark:text-gray-400 text-sm">{`Expires in ${expiresIn} days`}</Text>
      </View>
    </View>
  );
};

export default FoodItemCard;
