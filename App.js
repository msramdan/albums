import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import HomeComponent from "./components/HomeComponent";

export default function App() {
  const [testing, setTesting] = useState(500);

  useEffect(() => {
    console.log("Compenent did mount");
  }, []);

  useEffect(() => {
    console.log("Compenent did update");
  }, [testing])
  

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Albums</Text>
        <Text>{testing}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },

  textStyle: {
    fontSize: 28,
  },
});
