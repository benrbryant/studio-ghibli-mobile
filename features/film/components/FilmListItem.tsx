import { Text, StyleSheet, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/common/hooks/useTheme";
import { Film } from "../types";
import { ReactNode } from "react";

export default function FilmListItem({ id, title, movie_banner }: Film): ReactNode {
  const theme = useTheme();
  const router = useRouter();

  const dynamicStyles = {
    container: {
      backgroundColor: theme.colors.card,
      borderRadius: theme.roundness.md,
    },
    text: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.sm,
    },
  };

  return (
    <Pressable style={[dynamicStyles.container, styles.container]} onPress={() => router.push(`/films/${id}`)}>
      <Image source={{ uri: movie_banner }} style={styles.image} />
      <Text style={[dynamicStyles.text, styles.text]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: 200,
    backgroundClip: "clip",
    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
  text: {
    padding: 10,
    backgroundColor: "#EEEEEEDD",
  },
});
