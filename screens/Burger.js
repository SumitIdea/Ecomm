import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios";

const Burger = () => {
    const[getBurger, setBurger] = useState('')

 
    
const callApi=() => {
  const fetch = require('node-fetch');

  const url = 'https://burgers-hub.p.rapidapi.com/find-burger/?search=chicken';
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3af8888741mshf86007a6977fc6ep13e3c4jsnb84d4f6f19b3',
      'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}
useEffect(() => {
   callApi();
});


  return (
    <View style={{ margin: 5, borderRadius: 10, elevation: 5, flexDirection: 'row', shadowRadius: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, padding: 10, backgroundColor: 'white' }}>
      <Text>Burger</Text>
    </View>
  )
}

export default Burger

const styles = StyleSheet.create({})