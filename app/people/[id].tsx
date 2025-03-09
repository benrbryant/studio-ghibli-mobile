import { View, StyleSheet } from "react-native";
import TitleText from "@/common/components/ui/TitleText";
import { useTheme } from "@/common/hooks/useTheme";
import { useLocalSearchParams } from "expo-router";

export default function PersonScreen() {
  const theme = useTheme();
  const { id } = useLocalSearchParams();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background,
        },
        styles.container,
      ]}
    >
      <TitleText title={`Person ${id}`} type="xl" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
});
