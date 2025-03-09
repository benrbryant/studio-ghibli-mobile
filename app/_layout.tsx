import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/common/contexts/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false, headerBackTitle: "Back" }}
            />
            <Stack.Screen
              name="films/[id]"
              options={{ title: "Film", headerBackTitle: "Back" }}
            />
            <Stack.Screen
              name="people/[id]"
              options={{ title: "Person", headerBackTitle: "Back" }}
            />
            <Stack.Screen
              name="species/[id]"
              options={{ title: "Species", headerBackTitle: "Back" }}
            />
            <Stack.Screen
              name="locations/[id]"
              options={{ title: "Location", headerBackTitle: "Back" }}
            />
            <Stack.Screen
              name="vehicles/[id]"
              options={{ title: "Vehicles", headerBackTitle: "Back" }}
            />
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
