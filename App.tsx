import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = async () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font: any) => Font.loadAsync(font));
    await Promise.all(fontPromises);
  };
  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
