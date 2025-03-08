import { createContext, useState } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import { Theme, lightTheme, darkTheme } from "../constants/theme";

export type ThemeType = "light" | "dark" | "system";

export interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  setThemeType: (themeType: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: any) {
  const colorScheme = useColorScheme();
  const [themeType, setThemeType] = useState<ThemeType>("system");

  const theme = determineTheme(themeType, colorScheme);

  const value = {
    theme,
    themeType,
    setThemeType,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function determineTheme(
  themeType: ThemeType,
  colorScheme: ColorSchemeName
): Theme {
  switch (themeType) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    default:
      return colorScheme === "dark" ? darkTheme : lightTheme;
  }
}
