import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity,ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useIsFocused } from "@react-navigation/native";
import { styles } from "../styles/StyledComp";
// const MySwal = withReactContent(Swal)

export default function CameraScreen({photos,setPhotos}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let camera = Camera;
  const isFocused = useIsFocused();

 
   const __takePicture = async () => {
     const photo = await camera.takePictureAsync();
      setPhotos([photo.uri,...photos])
   };

   const __switchCamera = () => {
    if (type === Camera.Constants.Type.back) {
      setType(Camera.Constants.Type.front);
    } else {
      setType(Camera.Constants.Type.back);
    }
  };
  

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  return (
 
  <View style={styles.container}> 


  {isFocused ? (
    <View style={styles.container}>
    <Camera
    style={styles.camera}
    type={type}
    ref={(r) => {
      camera = r; //Passing always the current reference to the global camera
    }}
    >
    <TouchableOpacity
          onPress={__switchCamera}
          
        >
            <ImageBackground
            source={{ uri: 'https://cdn-icons.flaticon.com/png/512/1817/premium/1817493.png?token=exp=1636148419~hmac=6353f73ce8403e396144071568f33cfc' }}
            style={{
              height: 40,
              width: 40,
                           
            }}
          />
      </TouchableOpacity>
      
     <View style={styles.cameraBottomContainer}>
          <View style={styles.cameraBottomInnerContainer}>
            <TouchableOpacity
              onPress={__takePicture}
              style={styles.cameraTakePictureButtonContainer}
            >
               <ImageBackground
                source={{ uri: 'https://cdn-icons.flaticon.com/png/512/1998/premium/1998337.png?token=exp=1636148360~hmac=ca624c3b49c35ed781bb0d384f409d26' }}
                style={{
                  height: 60,
                  width: 62,
                  
                  
                }}
              />
              </TouchableOpacity>
              
          </View>
        </View>
    
    </Camera>
  </View>

    ) : (
      <>
        <Text></Text>
      </>
    )}
    </View>

    
  );

  
}


  