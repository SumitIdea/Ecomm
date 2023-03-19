import { FlatList, SafeAreaView, StyleSheet, Text, Dimensions, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
let SCREEN_WIDTH = Dimensions.get('window').width;

const Mobile = ({...props}) => {

    const [getData, setData] = useState([])

    const callMobileApi = () => {
        const fetch = require('node-fetch');

        const url = 'https://dummyjson.com/products';

        const options = {
            method: 'GET',

        };

        fetch(url, options)
            .then(res => res.json())
            // .then(json => console.log(json.response.hits))
            .then(json => setData(json.products))
            .catch(err => console.error('error:' + err));

        // getData.forEach(element => {
        //     image = element.result.header_image_url
        //     title = element.result.full_title
        //     //    console.log("DDDDDaaaaaaaataa",element.result.header_image_url) 
        // });
    }

    const onTap = (title) => {
        // navigation.navigate('ProductDetails', title)
        // console.log('Button touched!');
      };

      useEffect(() => {
        callMobileApi()
      });          
        
    return (
        <SafeAreaView>
            {/* <TouchableOpacity style={{ margin: 5, borderRadius: 10, elevation: 5, shadowRadius: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, padding: 10, backgroundColor: 'white' }}>
                <Text onPress={() => callMobileApi()} style={{ fontSize: 30, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', fontWeight: 'bold' }}>Hit API</Text>
            </TouchableOpacity> */}


            <FlatList
                data={getData}
                renderItem={({ item }) =>

                    <View style={{ flex: 1, flexDirection: "row", margin:10}}>
                        <View style={{ flex: 1, backgroundColor: "#fff" }}>
                            <Image source={{ uri: (item.thumbnail) }}
                                style={{ width: null, flexGrow: 1, resizeMode: 'stretch', height: 150, margin: 5 }}
                            />
                        </View>

                        <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: 'center' }}>
                            <View style={{marginStart:20}}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>{item.title}</Text>
                            <Text style={{fontWeight:'bold',color:'darkgreen',fontSize:18}}>Price : ${item.price}</Text>
                           
                           <View style={{marginEnd:30,marginTop:20}}>
                            <TouchableOpacity
                            style={[styles.button, { backgroundColor: '#C6DBD5' }]}
                            // onPress={()=>props.navigation.navigate('ProductDetails', item.title)
                            onPress={()=>console.log(">>>>>>>>>",props.navigation.navigate('ProductDetails',{title:item.title,price:item.price,img:item.thumbnail,rating:item.rating,
                                description:item.description,discountPercentage:item.discountPercentage,
                                brand:item.brand,stock:item.stock,category:item.category,image:item.images,id:item.id}))
                        }>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-add-to-cart-vector-icon-png-image_4142516.jpg',
                                }}
                            />
                            <Text style={styles.buttonText}>Show Details</Text>
                        </TouchableOpacity>
                        </View>
                            </View>
                        </View>


                    </View>



                } />
        </SafeAreaView>
    )
}

export default Mobile

const styles = StyleSheet.create({ 
    button: {
    marginBottom: 12,
    flexDirection: 'row',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 16,
    justifyContent:'center',
    textAlign:'center',
    alignContent:'center',
    alignSelf:'center',
    marginStart:15,
    color:'black'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius:10
  },})