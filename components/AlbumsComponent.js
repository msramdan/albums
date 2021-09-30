import React, { useEffect, useState } from 'react'
import {StyleSheet, View, Text} from 'react-native'


const AlbumsComponent = (props) => {

  const [data1,setData] =useState()

  useEffect (()=>{
    fetch('http://localhost:8000/api/album')
    .then(response => response.json())
    .then(data2 => setData(data2.album))
  },[])

  console.log(data1)

    return (
        <View>
          {!data1 ? <Text>Waiting</Text> : data1.map(album =>(
              <Text key={album.id}>{album.title}</Text>
            )) }
        </View>
    )
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
  
  });
  

export default AlbumsComponent
