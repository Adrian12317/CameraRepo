import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CameraScreen from './pages/Camera';
import GalleryScreen from './pages/Gallery';
import Profile from './pages/Profile';



const Tab = createBottomTabNavigator();

export default function App() {
  const [photos,setPhotos] = useState([])

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if (route.name === "Camera") {
            iconName = focused ?
            "ios-information-circle"
            :
            "ios-information-circle-outline";
          }else if (route.name === "Gallery") {
            iconName = focused ?
            "ios-add-circle"
            :
            "ios-add-circle-outline";
          }else if (route.name === "Profile") {
            iconName = focused ?
            "ios-cart"
            :
            "ios-cart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor :"grey",
      })}
      >
       
       <Tab.Screen name="Gallery" >{(props) => <GalleryScreen{...props} photos={photos} />}</Tab.Screen>
        <Tab.Screen name="Camera" >{(props) => <CameraScreen{...props} photos={photos} setPhotos={setPhotos} />}</Tab.Screen>
       
        <Tab.Screen name="Profile" >{(props) => <Profile{...props} setPhotos={setPhotos} />}</Tab.Screen>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
