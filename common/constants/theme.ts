export type ThemeColors = {
    primary: string;
    secondary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    disabled: string;
    disabledText: string;
    white: string;
    black: string;
  };
  
  export type ThemeSpacing = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  
  export type ThemeRounding = {
    sm: number;
    md: number;
    lg: number;
  };
  
  export type ThemeFontSizes = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  
  export type ThemeFontWeights = {
    regular: string;
    medium: string;
    bold: string;
  };
  
  export type Theme = {
    dark: boolean;
    colors: ThemeColors;
    spacing: ThemeSpacing;
    roundness: ThemeRounding;
    fontSizes: ThemeFontSizes;
    fontWeights: ThemeFontWeights;
  };
  
  export const lightTheme: Theme = {
    dark: false,
    colors: {
      primary: "#6200ee",
      secondary: "#03dac6",
      background: "#f6f6f6",
      card: "#ffffff",
      text: "#000000",
      border: "#e0e0e0",
      notification: "#f50057",
      error: "#B00020",
      success: "#00C853",
      warning: "#FF9800",
      info: "#2196F3",
      disabled: "#e0e0e0",
      disabledText: "#9e9e9e",
      white: "#ffffff",
      black: "#000000",
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    roundness: {
      sm: 4,
      md: 8,
      lg: 16,
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
    },
    fontWeights: {
      regular: "400",
      medium: "600",
      bold: "700",
    },
  };
  
  export const darkTheme: Theme = {
    dark: true,
    colors: {
      primary: "#BB86FC",
      secondary: "#03DAC6",
      background: "#121212",
      card: "#1E1E1E",
      text: "#FFFFFF",
      border: "#2C2C2C",
      notification: "#CF6679",
      error: "#CF6679",
      success: "#00C853",
      warning: "#FF9800",
      info: "#2196F3",
      disabled: "#3d3d3d",
      disabledText: "#6e6e6e",
      white: "#ffffff",
      black: "#000000",
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    roundness: {
      sm: 4,
      md: 8,
      lg: 16,
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
    },
    fontWeights: {
      regular: "400",
      medium: "600",
      bold: "700",
    },
  };