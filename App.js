import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import HomeComponent from "./components/HomeComponent";

export default function App() {
  const [testing, setTesting] = useState();

  return (
    <View style={styles.container}>
      <HomeComponent testing="Masukan Nama" />

      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setTesting(text)}
      />
      <Text>{testing}</Text>
      <Image style={{ height:100, width:100 }} source={{uri:"https://www.kodingindonesia.com/wp-content/uploads/2017/07/Props-dan-State-di-React-Native.jpg"}} />
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
