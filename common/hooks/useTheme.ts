import { useContext } from "react";
import { useColorScheme } from "react-native";
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext";
import { Theme, darkTheme, lightTheme } from "../constants/theme";

export function useTheme(): Theme {
  const themeContext = useContext<ThemeContextType | undefined>(ThemeContext);
  if (themeContext) {
    return themeContext.theme;
  }

  const colorScheme = useColorScheme();
  return colorScheme === "dark" ? darkTheme : lightTheme;
}
