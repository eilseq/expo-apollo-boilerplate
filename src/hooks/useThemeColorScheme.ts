import Colors from "../constants/Colors";
import { useColorScheme } from "react-native";

export const useThemeColorScheme = () => {
  const theme = useColorScheme();
  return Colors[theme!];
};
