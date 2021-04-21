import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      SplashScreen.preventAutoHideAsync();

      // Load resources:
      // await ... loadAsync(...)

      setLoadingComplete(true);
      SplashScreen.hideAsync();
    }
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};
