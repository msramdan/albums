import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Card = (props) => {
  return <View style={styles.ContainerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  ContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});

export default Card;
