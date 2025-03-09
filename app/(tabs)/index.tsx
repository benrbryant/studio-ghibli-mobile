import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTheme } from "@/common/hooks/useTheme";
import { useRouter } from "expo-router";
import TitleText from "@/common/components/ui/TitleText";
import { RESOURCES } from "@/common/constants/resources";

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();

  const dynamicStyles = {
    cardTitle: {
      fontSize: theme.fontSizes.lg,
    },
    card: {
      borderRadius: theme.roundness.md,
    },
    title: {
      color: theme.colors.text,
      borderColor: theme.colors.text,
    },
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        backgroundColor: theme.colors.background,
      }}
    >
      <TitleText
        title="Resources"
        type="xl"
        style={{ ...styles.title, ...dynamicStyles.title }}
      />
      <View>
        {RESOURCES.map((resource) => (
          <Pressable
            onPress={() => router.push(resource.list_url)}
            key={resource.id}
            style={[
              {
                borderWidth: 5,
                borderColor: resource.color,
                backgroundColor: "#eee",
              },
              dynamicStyles.card,
              styles.card,
            ]}
          >
            <Text style={dynamicStyles.cardTitle}>{resource.title}</Text>
            <FontAwesome5 name="chevron-right" size={24} color="black" />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    borderBottomWidth: 2,
    padding: 6,
  },
  card: {
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
