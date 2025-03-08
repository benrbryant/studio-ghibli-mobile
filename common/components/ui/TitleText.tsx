import { ReactElement } from "react";
import { Text, StyleSheet } from "react-native";
import { useTheme } from "@/common/hooks/useTheme";

export default function TitleText({
  type = "sm",
  title,
}: TitleTextProps): ReactElement {
  const theme = useTheme();
  return (
    <Text style={{ fontSize: theme.fontSizes[type], ...styles.title }}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    fontWeight: 600,
  },
});

type TitleTextProps = {
  type?: "xs" | "sm" | "md" | "lg" | "xl";
  title?: string;
};
