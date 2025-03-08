import { View, Text } from "react-native";
import { useTheme } from "@/common/hooks/useTheme";
import { Link } from "expo-router";

export default function Index() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        backgroundColor: theme.colors.background,
      }}
    >
      <Link href={"/films"}>
        <Text>See Films</Text>
      </Link>
    </View>
  );
}
