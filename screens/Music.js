import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Linking } from 'react-native';

var size = ""
var title = ""
const Music = () => {

    const [getData, setData] = useState([])

    const callMusicApi = () => {
        const fetch = require('node-fetch');

        const url = 'https://genius-song-lyrics1.p.rapidapi.com/search?q=Alan%20Walker&per_page=10&page=1';

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3af8888741mshf86007a6977fc6ep13e3c4jsnb84d4f6f19b3',
                'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            // .then(json => console.log(json.response.hits))
            .then(json => setData(json.response.hits))
            .catch(err => console.error('error:' + err));

        // getData.forEach(element => {
        //     image = element.result.header_image_url
        //     title = element.result.full_title
        //     //    console.log("DDDDDaaaaaaaataa",element.result.header_image_url) 
        // });
    }

    const torrentApi = () => {
        const fetch = require('node-fetch');

        const url = 'https://movie-tv-music-search-and-download.p.rapidapi.com/search?keyword=Top%20Gun%20Maverick%202022%202160p&quantity=10';

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3af8888741mshf86007a6977fc6ep13e3c4jsnb84d4f6f19b3',
                'X-RapidAPI-Host': 'movie-tv-music-search-and-download.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            // .then(json => console.log(json))
            .then(json => setData(json.result))
            .catch(err => console.error('error:' + err));

        // getData.forEach(element => {
        //     size = element.size
        //     title = element.title
        //     console.log("DD................",title+"   "+ size);
        //     //    console.log("DDDDDaaaaaaaataa",element.result.header_image_url) 
        // });
    }
  


    useEffect(() => {
    });

    return (
        <SafeAreaView>
            <TouchableOpacity style={{ margin: 5, borderRadius: 10, elevation: 5, shadowRadius: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, padding: 10, backgroundColor: 'white' }}>
                <Text onPress={() => torrentApi()} style={{ fontSize: 30, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', fontWeight: 'bold' }}>Hit API</Text>
            </TouchableOpacity>


            <FlatList
                data={getData}
                renderItem={({ item }) =>
                    <View style={{ flexDirection: 'column', margin: 5, borderRadius: 10, elevation: 5, shadowRadius: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, padding: 10, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{item.title}</Text>

                        <Image source={{ uri: 'https://www.theindianwire.com/wp-content/uploads/2017/12/tumblr_static_tumblr_static_anhcvbf48bsowgg48csgwkkkk_640-1200x675.png' }}
                            style={{ width: "100%", height: 200, marginTop: 10, alignSelf: 'center' }}
                        />
                        <Text style={{ marginTop: 10, color: 'blue' }} onPress={() => Linking.openURL(item.torrent)}>Download :{item.torrent}</Text>

                        <Text style={{ marginTop: 10 }}>Size : {item.size}</Text>

                       
                    </View>



                } />
        </SafeAreaView>
    )
}

export default Music

const styles = StyleSheet.create({})