import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DATA = [
  {
    id: "1",
    title: "First Item",
    image:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  },
  {
    id: "2",
    title: "Second Item",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU",
  },
  {
    id: "3",
    title: "Third Item",
    image:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",

  },
  {
    id: "4",
    title: "View All",
    image:"http://www.hotelbrokersindia.com/img/view-all-button.png",

  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    {/* <Text style={[styles.title, textColor]}>{item.title}</Text> */}
    <View
    
    style={{borderRadius: 10, elevation: 5, flexDirection: 'row', shadowRadius: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, padding: 10, backgroundColor: 'white' }}>
    <Image
        style={styles.stretch}
        source={{ uri: item.image }}
      />
    </View>
  
  </TouchableOpacity>
  
);

const Categories = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        // backrgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginHorizontal: 10,
    marginTop:10,
    
  },
  title: {
    fontSize: 32,
  },
  stretch: {
    resizeMode: 'stretch',
    alignSelf: 'center',
    height: 150, 
    width: 200,
  },
});

export default Categories;