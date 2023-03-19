import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import React from 'react'

let SCREEN_WIDTH = Dimensions.get('window').width;


const ProductItems = (props) => {
  console.log("..........",props);
  return (
    <View style={styles.container} >
    <Image 
        source={props.imageUri} 
        style={styles.image} />
</View>
  )
}

export default ProductItems


const styles = StyleSheet.create({
  container:{
      flex:1,
      width: SCREEN_WIDTH / 3,
  },
  image: { 
      width: null, 
      height: null, 
      flexGrow: 1, 
      resizeMode: 'contain',
  },
});