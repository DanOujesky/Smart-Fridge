import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ThemedIconProps = {
  name: any;
  size: number;
  colorBasic: any;
  colorDark: any;
};

const ThemedIcon = ({ name, size, colorBasic, colorDark }: ThemedIconProps) => {
  const scheme = useColorScheme();

  return (
    <Ionicons
      name={name}
      size={size}
      color={scheme === "dark" ? colorDark : colorBasic}
    />
  );
};

export default ThemedIcon;
