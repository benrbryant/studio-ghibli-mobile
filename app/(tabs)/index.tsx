import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTheme } from "@/common/hooks/useTheme";
import { useRouter } from "expo-router";
import TitleText from "@/common/components/ui/TitleText";

const RESOURCE_LINKS: { title: string; url: any; color: string }[] = [
  {
    title: "Films",
    url: "/lists?type=films",
    color: "#74B3CE",
  },
  {
    title: "People",
    url: "/lists?type=people",
    color: "#508991",
  },
  {
    title: "Species",
    url: "/lists?type=species",
    color: "#8A89C0",
  },
  {
    title: "Locations",
    url: "/lists?type=locations",
    color: "#CDA2AB",
  },
  {
    title: "Vehicles",
    url: "/lists?type=vehicles",
    color: "#09BC8A",
  },
];

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
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        backgroundColor: theme.colors.background,
      }}
    >
      <TitleText title="Resources" type="xl" style={styles.title} />
      <View>
        {RESOURCE_LINKS.map((resource) => (
          <Pressable
            onPress={() => router.push(resource.url)}
            key={resource.url}
            style={[
              { borderWidth: 5, borderColor: resource.color, backgroundColor: "#eee" },
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
