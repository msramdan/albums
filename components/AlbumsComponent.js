import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import AlbumDetail from './AlbumDetail';

const AlbumsComponent = (props) => {
  const [data1, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/api/album")
      .then((response) => response.json())
      //respons di tampung dalam variable data2
      .then((data2) => setData(data2.album));
  }, []);

  console.log(data1);

  return (
    <View>
      {!data1 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        data1.map((album) => <AlbumDetail key={album.id} ramdan={album}/>)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centered:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
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
});

export default AlbumsComponent;
