import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "@/common/hooks/useTheme";
import { Film } from "../types";
import { ReactNode } from "react";

export default function FilmListItem({ title, movie_banner }: Film): ReactNode {
  const theme = useTheme();

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
    <View style={[dynamicStyles.container, styles.container]}>
      <Image source={{ uri: movie_banner }} style={styles.image} />
      <Text style={[dynamicStyles.text, styles.text]}>{title}</Text>
    </View>
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
