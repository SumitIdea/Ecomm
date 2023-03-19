import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
let SCREEN_WIDTH = Dimensions.get('window');
const ratio = SCREEN_WIDTH.width / 541; //541 is actual image width
import { ImageSlider } from "react-native-image-slider-banner";
import VideoPlayer from 'react-native-video-player'


const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
var addCart = []

var data;
const starImgCorner = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png"
const starImgFilled = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png"

const ProductDetails = (props) => {

    data = props.route.params
    console.log("d....................", data);
    const [defaultRating, setDefaultRating] = useState(props.route.params.rating)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])
    // console.log("IMMGG", props.route.params.image)
    var d = 1 - ((props.route.params.discountPercentage) / 100)
    var total = (props.route.params.price) / d
    var price = Math.floor(total * 100) / 100;
    var totalPrice = price.toFixed(2);


    let img = props.route.params.image
    result = []

    img.forEach(element => {
        let val = {
            img: element
        }
        result.push(val)
        // console.log("DDDDDDD>...............", result) 
    });

    // console.log("/////////",result);

    function addItem(brand, img, amount,id) {
        let val = {
            id: id,
            img: img,
            brand: brand,
            price: amount,
            qty:0,
            newPrice:0,
        }
        addCart.push(val)
        console.log("addtoCart.................", addCart);
        return addCart
    }

    const CustomRatingBar = () => {
        return (
            <View style={styles.CustomRatingStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}

                                onPress={() => setDefaultRating(item)}>

                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating ? { uri: starImgFilled } : { uri: starImgCorner }
                                    }
                                >
                                </Image>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    // console.log("PPPPPPPPPPPPPPPPPPP", props);
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column' }}>
            {/* <ScrollView> */}
            <View>

                <ImageSlider
                    data={result}

                    // data={[
                    //   { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
                    //   { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
                    //   { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
                    // ]}
                    //   localImg   // pick image folder assets 
                    autoPlay={true}
                    onPress={() => Alert.alert("item", item)}
                    closeIconColor="#000" />
            </View>
            {/*Category View*/}
            <View style={{ flexDirection: 'row', backgroundColor: '#F8F9CC', marginStart: 10, marginEnd: 10, marginTop: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 5, marginBottom: 5, color: '#6F1009' }} >Category : </Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#388e3c', marginTop: 5, marginBottom: 5 }}>{props.route.params.category}</Text>
            </View>
            {/* End Category View */}


            {/* LEft And Right */}
            <View style={{ flexDirection: 'row', marginStart: 10, marginEnd: 10 }}>

                <View style={styles.leftContainer}>
                    <Text style={styles.headingText} >{props.route.params.title}</Text>
                </View >

                <View style={styles.rightContainer}>
                    <CustomRatingBar></CustomRatingBar>
                </View>

            </View>


            {/* Left and Right */}

            <View style={{ flexDirection: 'row', marginStart: 10, marginEnd: 10, marginTop: 5 }}>

                <View style={styles.leftContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, color: 'grey' }} >Discount : </Text>

                    <Text style={{ fontSize: 18, color: '#388e3c', fontWeight: '500', marginTop: 10 }} >{props.route.params.discountPercentage}% off  </Text>
                    <Text style={{ fontSize: 18, color: 'grey', fontWeight: '500', marginTop: 10, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} >{totalPrice}</Text>

                </View >

                <View style={styles.rightContainer}>
                    <Text style={{ fontSize: 18, marginTop: 10, fontWeight: '500', color: 'grey' }} >Price : </Text>

                    <Text style={styles.priceText} >${props.route.params.price}</Text>
                </View>

            </View>
            {/* LEft and right */}

            <View style={{ flexDirection: 'row', marginStart: 10, marginEnd: 10, marginBottom: 10 }}>

                <View style={styles.leftContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, color: 'grey' }} >Brand : </Text>

                    <Text style={{ fontSize: 18, color: '#388e3c', fontWeight: '500', marginTop: 10 }} >{props.route.params.brand}  </Text>

                </View >

                <View style={styles.rightContainer}>
                    <Text style={{ fontSize: 18, marginTop: 10, fontWeight: '500', color: 'grey' }} >Stock : </Text>

                    <Text style={styles.priceText} >{props.route.params.stock}</Text>
                </View>

            </View>
            {/* end */}
            <View>
                <Text style={{ fontSize: 18, fontWeight: '500', marginStart: 10, marginEnd: 10, marginTop: 10, color: 'grey' }} >Description :</Text>

                <Text style={{ fontSize: 15, color: 'black', marginStart: 10, marginEnd: 10, marginTop: 5, marginBottom: 10 }} >{props.route.params.description}</Text>
            </View>

            {/* https://carlofontanos.com/react-native-cart-system/ */}




            {/* LEft and right */}

            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <View style={{ flexDirection: 'row', marginStart: 10, marginEnd: 10, marginBottom: 10 }}>

                    <View style={styles.leftContainer}>
                        <TouchableOpacity
                            style={styles.buttonFacebookStyle}
                            activeOpacity={0.5}
                            onPress={() => props.navigation.navigate('Cart', addItem(props.route.params.brand, props.route.params.image[0], props.route.params.price, props.route.params.id))}
                        >
                            <Image
                                source={{
                                    uri: 'https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-add-to-cart-vector-icon-png-image_4142516.jpg',
                                }}
                                style={styles.buttonImageIconStyle}
                            />
                            <View style={styles.buttonIconSeparatorStyle} />
                            {/* <Text style={styles.buttonTextStyle} onPress={()=>props.navigation.navigate('Cart',{brand:props.route.params.brand, pic:props.route.params.image,amount:props.route.params.price})}>Add to Cart</Text> */}
                            <Text style={styles.buttonTextStyle} >Add to Cart</Text>

                        </TouchableOpacity>

                    </View >

                    <View style={styles.rightContainer}>
                        <TouchableOpacity
                            style={styles.buttonFacebookStyle}
                            activeOpacity={0.5}>


                            <Image
                                source={{
                                    uri: 'https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-buy-now-technology-ecommerce-flaticons-flat-flat-icons-2.png',
                                }}
                                style={styles.buttonImageIconStyle}
                            />
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Text style={styles.buttonTextStyle} >  Buy Now  </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            {/* End */}



            <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5, justifyContent: 'center', alignSelf: 'center', marginBottom: 5, color: '#6F1009' }} >: Advertisement : </Text>

                {/* <VideoPlayer
                    // source={{`
                    //   uri:
                    //     'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
                    // }}
                    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    thumbnail={{ uri: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=740' }}
                    endThumbnail={{ uri: 'https://media.istockphoto.com/id/1283516080/photo/animals.jpg?s=170667a&w=0&k=20&c=P5OMNK-i5QlnRhwVo5rMVfHgVQ83NNnmoBM437X41IM=' }}
                    controlsTimeout={2000}
                    showDuration={true}
                    autoplay
                    defaultMuted={true}
                    disableSeek={true}
                    disableControlsAutoHide={false}
                    pauseOnPress={true}
                /> */}
            </View>


            {/* </ScrollView> */}

        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    image: {
        height: imageHeight, width: imageWidth, resizeMode: 'contain'
    },
    headingText: {
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#6F1009',
    },
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 30,
        resizeMode: 'stretch',
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#094B1C',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,

    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 20,
        marginRight: 20
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#388e3c',
        marginTop: 8
    },
    CustomRatingStyle: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginTop: 10,

    },
    starImgStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});