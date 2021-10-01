import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Card from "../Card/card";

const AlbumDetail = (props) => {
  return (
    <Card>
      <View>
        <View style={styles.thumbnaiContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: props.ramdan.thumbnail }}
          />
        </View>
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>{props.ramdan.title}</Text>
          <Text>{props.ramdan.penyanyi}</Text>
          {/* <Image
            style={styles.imageStyle}
            source={{ uri: props.ramdan.image }}
          /> */}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
    imageStyle: {
        height:300,
        flex:1,
        width:null
      },
      
  thumbnail: {
    height: 100,
    width: 100,
  },

  HeaderContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
  },

  HeaderText: {
    fontSize: 18,
  },

  thumbnaiContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});

export default AlbumDetail;
