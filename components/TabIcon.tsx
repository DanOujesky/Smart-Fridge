import { Image, View } from "react-native";
import React from "react";

type TabIconProps = {
  focused: boolean;
  iconBasic: any;
  iconFocused: any;
  imageSize: number;
};

const TabIcon = ({
  iconBasic,
  iconFocused,
  focused,
  imageSize,
}: TabIconProps) => {
  return (
    <View className="w-full h-full justify-center items-center">
      <Image
        source={focused ? iconFocused : iconBasic}
        style={{ width: imageSize, height: imageSize }}
        resizeMode="contain"
      />
    </View>
  );
};

export default TabIcon;
