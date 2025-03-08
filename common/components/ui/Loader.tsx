import {
  View,
  ActivityIndicator,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { useTheme } from "@/common/hooks/useTheme";

export default function Loader({
  size,
  color,
  fullScreen,
  style,
}: LoaderProps): any {
  const theme = useTheme();
  const loaderColor = color || theme.colors.primary;

  return (
    <View style={[fullScreen ? styles.fullScreen : styles.container, style]}>
      <ActivityIndicator size={size} color={loaderColor} />
    </View>
  );
}

type LoaderProps = {
  size?: "small" | "large";
  color?: string;
  fullScreen?: boolean;
  style?: ViewStyle;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreen: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#00000044",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
