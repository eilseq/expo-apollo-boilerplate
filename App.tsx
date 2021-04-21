import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home, Details } from "./src/screens";
import { useCachedResources, useThemeColorScheme } from "./src/hooks";

const Stack = createStackNavigator();
const client = new ApolloClient({
  uri: "www.domain.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const theme = useThemeColorScheme();

  if (!isLoadingComplete) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
          </NavigationContainer>
        </ApolloProvider>
      </ThemeProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
