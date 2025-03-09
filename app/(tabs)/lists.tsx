import FilmList from "@/features/film/components/FilmList";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { View, Text } from "react-native";

export default function ListsScreen() {
  const { type } = useLocalSearchParams();

  return (
    <View>
        {/* Buttons per category */}
        {/* Sorting */}
        {/* List */}
      <Text>Show {type} list</Text>
      <FilmList />
    </View>
  );
}
