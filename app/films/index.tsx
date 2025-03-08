import { View, StyleSheet } from "react-native";
import TitleText from "@/common/components/ui/TitleText";
import FilmList from "@/features/film/components/FilmList";
import { useTheme } from "@/common/hooks/useTheme";

export default function FilmsScreen() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        backgroundColor: theme.colors.background,
      }}
    >
      <TitleText title="Studio Ghibli Films" type="xl" />
      <FilmList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
