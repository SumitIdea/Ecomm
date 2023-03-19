import { StyleSheet, Text, View, Image,ToastAndroid, TouchableOpacity, Button,FlatList,Pressable, Alert,Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { TextInput, Snackbar} from 'react-native-paper';
// import { TextInput } from "@react-native-material/core";
import AsyncStorage from '@react-native-async-storage/async-storage';



const Cart = (props) => {

    // console.log(".........................", props.route.params);
    var allData = props.route.params
    const [isSelected, setSelection] = useState(false);
    const [response, setResponse] = useState(allData)
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = React.useState("")
    const [mobile, setMobile] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [pincode, setPinCode] = React.useState("")

    const value = {
      user_name: name,
      user_mobile: mobile,
      user_email: email,
      user_address:address,
      user_pincode:pincode
    };
    const storeData = async () => {
      try {
        await AsyncStorage.setItem("user", JSON.stringify(value));  
        ToastAndroid.showWithGravityAndOffset(
          "Data Saved Successfully",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        setModalVisible(!modalVisible);

      } catch (e) {
        console.log(error);
      }
    }
    const getUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("user");
        const currentUser = JSON.parse(savedUser);
        console.log(currentUser);
      } catch (error) {
        console.log(error);
      }
    };

    //to remove the item completely
    function deleteItemById(deleteIndex) {
        Alert.alert(
            'Delete the selected Product',
            'Are you sure want to delete this product ?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => deleteAddressDetail(deleteIndex) },
            ],
            { cancelable: false }
        )

    }


    // const deleteAddressDetail=(id)=> {
    //     let arr = response.filter((item,i) => {
    //       return item.id !== id
    //     })
    //     setResponse(arr);

    //   };
    const deleteAddressDetail = (index) => {
        response.splice(index, 1)
        setResponse([...response])
    }

    const [refresh, setRefresh] = useState(''); // <- Add if your view not Rerender

    const handleIncrease = (index, amount) => {
        // console.log("index.......",index);
      const temp = response;
      temp[index].qty = temp[index].qty + 1;
      temp[index].newPrice=temp[index].price * temp[index].qty

      setResponse(temp);
      setRefresh(Math.random()); // <- Add if your view not Rerender
    };
  
    const handleDecrease = (index,amount) => {
      const temp = response;
      temp[index].qty = Math.max(1,temp[index].qty - 1)
      temp[index].newPrice= temp[index].price * temp[index].qty
      setResponse(temp);

      setRefresh(Math.random()); // <- Add if your view not Rerender
    };

    onChangeValue = (item, newValue) => {
        console.log("New Value ................", newValue);
        const newData = response.map(newItem => {
                    console.log("New Value ................", newItem);
                    console.log("New Value ................", newItem.id +"=="+ item.id);

          if (newItem.id == item.id) {
            return {
              ...newItem,
              selected: newValue,
            }
          }
          
          return newItem
        })
        setResponse(newData);
      }
    
      let totalPrice =0 ;
      let totalQuantity =0;
      response.forEach(item => {
        totalPrice += item.qty*item.price
        totalQuantity+=item.qty
        
      });

       useEffect(() => {
          getUser()
        });

    return (
        <View style={{ flexDirection: 'column' }}>
              <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        
        <View style={styles.centeredView}>
          
          <View style={styles.modalView}>
        
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              position:'absolute',
              margin:10,
              left:0,
              right:1
          
            }}
              >
            <Button
              title="Save"
              onPress={() =>storeData()}
            />
        </View>
            <Text style={styles.modalText}>Add Shipping Address!</Text>
            <TextInput variant="outlined" 
                       label="Enter your Name" 
                       value={name}
                       onChangeText={text => setName(text)}
                       style={styles.textField}/>

             <TextInput variant="outlined" 
                        value={mobile}
                        onChangeText={text => setMobile(text)}
                        style={styles.textField}
                        label="Enter Mobile No"
                        keyboardType='number-pad'/>

             <TextInput  variant="outlined" 
                          value={email}
                          onChangeText={text => setEmail(text)}
                         style={styles.textField}
                         label="Enter email ID"/>

             <TextInput  variant="outlined" 
                          value={address}
                          onChangeText={text => setAddress(text)}
                         style={styles.textField}
                         label="Enter Address"/>

             <TextInput  variant="outlined" 
                          value={pincode}
                           onChangeText={text => setPinCode(text)}
                         style={styles.textField}
                         label="Enter Pincode"
                         keyboardType='number-pad'/>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            <FlatList
                style={{ height: "83%" }}
                data={response}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item, index }) =>

                    <View style={{ margin: 5, borderRadius: 20, elevation: 5, flexDirection: 'column', shadowRadius: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, padding: 10, backgroundColor: 'white' }}>
                        <TouchableOpacity
                            onPress={() => deleteItemById(index)}
                            style={{ flexDirection: 'row', flex: 1, justifyContent: "flex-end", marginEnd: 10, marginBottom: 10 }}>

                            <Image
                                style={{ height: 24, width: 24, resizeMode: 'center' }}
                                source={{ uri: 'https://www.iconsdb.com/icons/preview/red/delete-xxl.png' }} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            {/* Check Box */}
                            <View style={{ flex: 0.5, flexDirection: "row", marginBottom: 20 }}>
                                <CheckBox
                                    value={item.selected}
                                    onValueChange={newValue => onChangeValue(item, newValue)}
                                    tintColors={{ true: '#F15927', false: 'black' }}
                                    disabled={false}
                                    style={styles.checkbox}
                                    onAnimationType='fill'
                                    offAnimationType='fade'
                                />
                            </View>

                            {/* Image */}
                            <View style={{ flex: 2, backgroundColor: "#fff" }}>
                                <Image source={{ uri: (item.img) }}
                                    style={{ width: null, flexGrow: 1, resizeMode: 'center', height: 150, margin: 5 }}
                                />
                            </View>
                            {/* Brand and Price */}
                            <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: 'center', marginStart: 5, marginBottom: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey' }}>{item.brand}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>${item.newPrice}</Text>
                            </View>
                            {/* Increament and decrement */}
                            <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: 'center', marginStart: 5, marginBottom: 20, marginEnd: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() =>
                                    handleDecrease(index,item.price)
                                        // removeQuantityHandler(index+1,item.price,item.id)
                                        // setcount(Math.max(1, count - 1))
                                    } style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                                        {/* <MaterialIcons name="remove" size={22} color="#cccccc" /> */}
                                        <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 16 }}> - </Text>
                                    </TouchableOpacity>
                                    <Text style={{ borderTopWidth: 2, borderBottomWidth: 2, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 16 }}> {item.qty} </Text>
                                    <TouchableOpacity onPress={() =>
                                    handleIncrease(index,item.price)
                                        // addQuantityHandler(index+1,item.price,item.id)
                                        // setcount(count + 1)
                                        } style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                                        <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 16 }}> + </Text>
                                        {/* <MaterialIcons name="add" size={22} color="#cccccc" /> */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                } />
            {/* <View style={{flexDirection: 'row', height: 32, alignItems: 'center'}}>
							<TouchableOpacity style={[styles.centerElement, {backgroundColor: '#0faf9a', width: 100, height: 25, borderRadius: 5}]} onPress={() => console.log('test')}>
								<Text style={{color: '#ffffff'}}>Checkout</Text>
							</TouchableOpacity>
						</View> */}
            {/* ---------------------------- */}
            <View style={{ backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5 }}>
            <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.centerElement, { width: 60 }]}>
                        <View style={[styles.centerElement, { width: 32, height: 32 }]}>
                            {/* <MaterialCommunityIcons name="ticket" size={25} color="#f0ac12" /> */}
                            <Image
                                style={{ height: 24, width: 24, resizeMode: 'center' }}
                                source={{ uri: 'https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png' }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ paddingRight: 20 }}>
                        <Text style={{ color: 'grey',fontWeight:'bold' }}>{name}</Text>
                        <Text style={{ color: 'grey',fontWeight:'bold' }}>{email}</Text>

                        </View>
                        <View style={{ paddingRight: 20 }}>

                        <Text style={{ color: 'grey',fontWeight:'bold' }}>{mobile}</Text>
                        <Text style={{ color: 'grey',fontWeight:'bold' }}>{address}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',marginTop:10 }}>
                    <View style={[styles.centerElement, { width: 60 }]}>
                        <View style={[styles.centerElement, { width: 32, height: 32 }]}>
                            {/* <MaterialCommunityIcons name="ticket" size={25} color="#f0ac12" /> */}
                            <Image
                                style={{ height: 24, width: 24, resizeMode: 'center' }}
                                source={{ uri: 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-ticket-icon-flat-style-png-image_5252205.jpg' }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: 'grey' }}>Voucher</Text>
                        <View style={{ paddingRight: 20 }}>
                            <TextInput
                                style={{ paddingHorizontal: 10, backgroundColor: '#f0f0f0', height: 30, borderRadius: 4 }}
                                placeholder="Enter voucher code"
                            // value={''}
                            // onChangeText={(searchKeyword) => {

                            // } }
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.centerElement, { width: 60 }]}>
                        {/* <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => this.selectHandlerAll(selectAll)}> */}
                            {/* <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}

                                tintColors={{ true: '#F15927', false: 'black' }}
                                style={styles.checkbox} /> */}
                    <TouchableOpacity style={[styles.centerElement, { backgroundColor: 'powderblue', width: 30, height: 25, borderRadius: 5 }]} onPress={() =>setModalVisible(true)}>
                        <Text style={{ color: '#000' }}> + </Text>
                    </TouchableOpacity>
                            {/* <Ionicons name={selectAll == true ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={selectAll == true ? "#0faf9a" : "#aaaaaa"} /> */}
                        {/* </TouchableOpacity> */}
                    </View>
                    <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: 'grey' }}>Total Quantity {totalQuantity}</Text>
                        <View style={{ flexDirection: 'row', paddingRight: 20, alignItems: 'center' }}>
                            <Text style={{ color: '#8f8f8f' }}>SubTotal: ${totalPrice}</Text>
                            {/* <Text>${this.subtotalPrice().toFixed(2)}</Text> */}
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center' }}>
                    <TouchableOpacity style={[styles.centerElement, { backgroundColor: '#0faf9a', width: 100, height: 25, borderRadius: 5 }]} onPress={() => console.log('test')}>
                        <Text style={{ color: '#ffffff' }}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/* ----------------------------- */}
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    imageCircleStyle: {
        width: 50,
        height: 50,
        borderRadius: 200 / 2,
        borderWidth: 1,
        borderColor: '#0250a3',
        marginBottom: 30
    },
    checkbox: {
        alignSelf: "center",
    },
    centerElement:
    {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor:'powderblue',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:10
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight:'bold'
      },
      textField : {
        width:250,
        height:60,
        margin: 10,
        backgroundColor: '#f0f0f0', 
        borderRadius: 2,
      }

})