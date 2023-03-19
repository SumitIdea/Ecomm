import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native'
import React from 'react'
import SaleItem from "../components/SaleItem";
import ProductItems from "../components/ProductItems"
import Icon from 'react-native-vector-icons/Ionicons'
import { ImageSlider } from "react-native-image-slider-banner";
import { ScrollView } from 'react-native-gesture-handler';
import Categories from './Categories';


let SCREEN_WIDTH = Dimensions.get('window').width;

const Dash = () => {
  
  return (
    <ScrollView>
    <View style={{ flexDirection: 'column' }} >
      {/* <SaleItem imageUri={require('../assets/sale_0.jpg')} />
          <SaleItem imageUri={require('../assets/sale_1.jpg')} />
          <SaleItem imageUri={require('../assets/sale_2.jpg')} />
          <SaleItem imageUri={require('../assets/sale_2.jpg')} />
     */}


      {/* Banner */}
      <View style={{marginHorizontal:10,marginEnd:10}}>

        <ImageSlider
           data={[
            { img: require('../assets/banner_0.jpg') },
            { img: require('../assets/banner_1.jpg') },
            { img: require('../assets/banner_2.jpg') },
            { img: require('../assets/banner_3.jpg') },
            { img: require('../assets/banner_4.jpg') },
            { img: require('../assets/banner_5.jpg') },
            { img: require('../assets/banner_6.jpg') },
        ]}
          // data={[
          //   { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
          //   { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
          //   { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
          // ]}
          localImg   // pick image folder assets 
          autoPlay={true}
          onPress={()=>Alert.alert("item",item)}
          // onItemChanged={(item,index) => 
          //   console.log("item", item.img)  }
          // onClick={(item,index) => console.log("........Indeexx",item.img)}
          closeIconColor="#000"
        />  
      </View>

       {/* 4 Card view */}
       <Text style={{fontSize:20, marginTop:10,fontWeight:'bold', marginStart:10}}>Categories</Text>

      {/* <View
        style={{ flexDirection: 'row', height: SCREEN_WIDTH / 2, backgroundColor: '#fff' }} >

        <ProductItems imageUri={require('../assets/sale_0.jpg')} />
        <ProductItems imageUri={require('../assets/sale_1.jpg')} />

      </View> */}
      <Categories></Categories>

      <View style={{flexDirection:'column',margin:10}}>
        <Text style={{fontSize:20, margin:10,fontWeight:'bold', marginStart:10,marginBottom:10}}>Deal of the Day</Text>
        <ImageSlider
           data={[
            { img: require('../assets/deal1.jpeg') },
            { img: require('../assets/deal2.jpeg') },
            { img: require('../assets/deal3.jpeg') },
            { img: require('../assets/deal4.jpeg') },
        ]}  

          localImg   // pick image folder assets 
          autoPlay={true}

          // onClick={(item) => console.log("item", item)}
          closeIconColor="#000"
        />
      </View>
      <Text style={{fontSize:20, marginTop:10,fontWeight:'bold', marginStart:10,marginBottom:10 }}>India's Biggest Sales</Text>
      <View
       style={{ flexDirection: 'row', margin:10,height: SCREEN_WIDTH / 4, backgroundColor: '#fff', marginTop:10 }} >

        <ProductItems imageUri={require('../assets/sale_0.jpg')} />
        <ProductItems imageUri={require('../assets/sale_1.jpg')} />
        <ProductItems imageUri={require('../assets/sale_2.jpg')} />
        <ProductItems imageUri={require('../assets/sale_2.jpg')} />

      </View>

    </View>
    </ScrollView>
  )


}

export default Dash

const styles = StyleSheet.create({})