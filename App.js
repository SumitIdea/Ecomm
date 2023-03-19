import * as React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Platform, StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dash from './screens/Dash'
import ProductDetails from './components/ProductDetails';
import Anim from './screens/Anim';
import SearchFilter from './components/SearchFilter';
import Wave from './components/Wave';
import Burger from './screens/Burger';
import Music from './screens/Music';
import Mobile from './screens/Mobile';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './screens/Cart';


const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Dash></Dash>
  );
}

function ProfileScreen() {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Settings!</Text>
    // </View>
    // <ProductDetails
    //   imageUri={require('./assets/deal1.jpeg')}
    //   heading="Headphones&Speakers"
    //   price="Under ₹1049"
    // />
  //  <Anim></Anim>
  // <SearchFilter></SearchFilter>
//<Wave></Wave>
//<Music></Music>
<Mobile></Mobile> 
);
  }
  
  const Tab = createMaterialTopTabNavigator();

export default function App() {


  function Screen(){
    return (
      <Stack.Navigator>
         {/* <Stack.Screen name = 'ProfileScreen' component={ProfileScreen}/> */}
         <Stack.Screen name = 'Mobile' 
          options={{
            headerShown: false,
          }}
         component={Mobile}/> 

         <Stack.Screen name = 'ProductDetails' component={ProductDetails}/> 
         <Stack.Screen name = 'Cart' component={Cart}/> 

      </Stack.Navigator>
    )
  }
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'green',
          tabBarIndicatorStyle: {
            backgroundColor: 'green',
          },
          tabBarLabelStyle: { fontSize: 16 },
          swipeEnabled: false,
        }}
      //     tabBarStyle: { backgroundColor: 'powderblue' },
      //   }}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     } else if (route.name === 'Settings') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: 'tomato',
      //   tabBarInactiveTintColor: 'gray',
      // })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
        <Tab.Screen name="Product" component={Screen}/>


      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const AppDrawerNavigator = createDrawerNavigator({
//   HomeScreen: { screen: Home }
// },{
//   drawerPosition: 'left',
//   contentComponent: CustomDrawerContentComponent,
//   drawerOpenRoute: 'DrawerOpen',
//   drawerCloseRoute: 'DrawerClose',
//   drawerToggleRoute: 'DrawerToggle',
// });

