import { Resource, RESOURCES } from "@/common/constants/resources";
import FilmList from "@/features/film/components/FilmList";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useTheme } from "@/common/hooks/useTheme";

export default function ListsScreen() {
  const { type } = useLocalSearchParams();
  const theme = useTheme();

  const [selectedType, setSelectedType] = useState(type || "films");
  const [searchText, setSearchText] = useState("");

  function determineResourceColor(resource: Resource): string {
    if (selectedType === resource.title.toLowerCase()) {
      return resource.color;
    } else {
      return theme.colors.card;
    }
  }

  useEffect(() => {
    setSelectedType(type);
  }, [type]);

  const dynamicStyles = {
    container: {
      backgroundColor: theme.colors.background,
    },
    listBtn: {
      borderRadius: theme.roundness.lg,
      backgroundColor: theme.colors.card,
    },
    text: {
      color: theme.colors.text,
    },
    searchInput: {
      color: theme.colors.text,
      borderRadius: theme.roundness.md,
    },
  };

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <View style={styles.listBtnContainer}>
        {RESOURCES.map((resource) => {
          return (
            <Pressable
              key={resource.id}
              onPress={() => setSelectedType(resource.title.toLowerCase())}
              style={[
                styles.listBtn,
                dynamicStyles.listBtn,
                {
                  borderColor: resource.color,
                  borderWidth: 1,
                  backgroundColor: determineResourceColor(resource),
                },
              ]}
            >
              <Text style={dynamicStyles.text}>{resource.title}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={{ marginTop: 24, marginBottom: 24 }}>
        <TextInput
          keyboardType="default"
          placeholder="Search..."
          style={[styles.searchInput, dynamicStyles.searchInput]}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <FilmList searchTerm={searchText.trim().toLowerCase()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  listBtnContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
    marginTop: 16,
  },
  listBtn: {
    padding: 8,
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    padding: 8,
    fontSize: 16,
    borderColor: "#FFFFFF",
  },
});
