import { View, Text } from "react-native";
import { Link } from "expo-router";
import TitleText from "@/common/components/ui/TitleText";

export default function NotFoundScreen() {
  return (
    <View>
      <TitleText title="Oops! You're lost" type="xl" />
      <Link href={"/"}>Return Home</Link>
    </View>
  );
}
